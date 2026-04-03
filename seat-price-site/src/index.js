import { buildFallbackSummaries, parseIntentHeuristically, searchFlights } from "./engine.js";

function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    headers,
  });
}

function errorResponse(message, status = 400) {
  return json({ error: message }, { status });
}

function sanitizeIntent(candidate, fallbackIntent) {
  const allowedPriorities = new Set(["sleep", "privacy", "value", "direct", "experience", "balanced"]);
  const allowedAirlines = new Set(["JAL", "ANA", "AF", "QR"]);
  const allowedCities = new Set(["Paris", "Nice"]);

  const priorities = Array.isArray(candidate?.priorities)
    ? candidate.priorities.filter((item) => allowedPriorities.has(item))
    : fallbackIntent.priorities;
  const preferredAirlines = Array.isArray(candidate?.preferredAirlines)
    ? candidate.preferredAirlines.filter((item) => allowedAirlines.has(item))
    : fallbackIntent.preferredAirlines;
  const destinationCity = allowedCities.has(candidate?.destinationCity) ? candidate.destinationCity : fallbackIntent.destinationCity;

  return {
    ...fallbackIntent,
    destinationCountry: candidate?.destinationCountry || fallbackIntent.destinationCountry,
    destinationCity,
    travelMonth: candidate?.travelMonth || fallbackIntent.travelMonth,
    cabin: candidate?.cabin || fallbackIntent.cabin,
    priorities: priorities.length ? priorities : fallbackIntent.priorities,
    preferredAirlines,
    budgetCeilingCny: typeof candidate?.budgetCeilingCny === "number"
      ? candidate.budgetCeilingCny
      : fallbackIntent.budgetCeilingCny,
    maxStops: Number.isInteger(candidate?.maxStops) ? candidate.maxStops : fallbackIntent.maxStops,
    assumptions: Array.isArray(candidate?.assumptions) && candidate.assumptions.length
      ? candidate.assumptions
      : fallbackIntent.assumptions,
  };
}

async function callOpenAIJson(env, body) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI request failed (${response.status}): ${text}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error("OpenAI response did not include message content.");

  return JSON.parse(content);
}

async function parseIntentWithOpenAI(prompt, fallbackIntent, env) {
  const data = await callOpenAIJson(env, {
    model: env.OPENAI_MODEL || "gpt-5-mini",
    temperature: 0.1,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You extract flight-search intent for a premium flight decision tool. Return only JSON. " +
          "Use these exact enums when possible: priorities=[sleep, privacy, value, direct, experience, balanced], " +
          "preferredAirlines=[JAL, ANA, AF, QR], destinationCity=[Paris, Nice], destinationCountry=[France], cabin=[商务舱]. " +
          "If the user does not specify something, use null or empty arrays. Do not invent details beyond the request.",
      },
      {
        role: "user",
        content: JSON.stringify({
          prompt,
          currentFallback: fallbackIntent,
          outputShape: {
            destinationCountry: "France | null",
            destinationCity: "Paris | Nice | null",
            travelMonth: "string | null",
            cabin: "商务舱 | null",
            priorities: ["sleep", "privacy", "value", "direct", "experience", "balanced"],
            preferredAirlines: ["JAL", "ANA", "AF", "QR"],
            budgetCeilingCny: "number | null",
            maxStops: "number | null",
            assumptions: ["string"],
          },
        }),
      },
    ],
  });

  return sanitizeIntent(data, fallbackIntent);
}

async function summarizeWithOpenAI(intent, flights, fallback, env) {
  const data = await callOpenAIJson(env, {
    model: env.OPENAI_MODEL || "gpt-5-mini",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You write concise Chinese summaries for flight options. Return only JSON. " +
          "Use only the supplied structured data and public review snippets. " +
          "Do not invent claims, routes, seat facts, or quotes.",
      },
      {
        role: "user",
        content: JSON.stringify({
          intent,
          flights,
          fallback,
          outputShape: {
            disclaimer: "string",
            items: [
              {
                id: "string",
                headline: "string",
                whyRecommended: ["string", "string"],
                caution: ["string"],
                publicReviewDigest: ["string", "string", "string"],
              },
            ],
          },
        }),
      },
    ],
  });

  return {
    source: "openai",
    disclaimer: data.disclaimer || fallback.disclaimer,
    items: Array.isArray(data.items) && data.items.length ? data.items : fallback.items,
  };
}

async function handleIntent(request, env) {
  const payload = await request.json();
  const prompt = typeof payload?.prompt === "string" ? payload.prompt.trim() : "";
  if (!prompt) return errorResponse("Missing prompt.");

  const fallbackIntent = parseIntentHeuristically(prompt);

  if (!env.OPENAI_API_KEY) {
    return json({ intent: fallbackIntent, source: "heuristic" });
  }

  try {
    const intent = await parseIntentWithOpenAI(prompt, fallbackIntent, env);
    return json({ intent, source: "openai" });
  } catch (error) {
    console.error(JSON.stringify({ route: "/api/intent", error: String(error) }));
    return json({ intent: fallbackIntent, source: "heuristic" });
  }
}

async function handleSearch(request) {
  const payload = await request.json();
  if (!payload?.intent) return errorResponse("Missing intent.");

  const result = searchFlights(payload.intent);
  return json(result);
}

async function handleSummary(request, env) {
  const payload = await request.json();
  const intent = payload?.intent;
  const flights = Array.isArray(payload?.flights) ? payload.flights : [];

  if (!intent || !flights.length) {
    return errorResponse("Missing intent or flights.");
  }

  const fallback = buildFallbackSummaries(intent, flights);

  if (!env.OPENAI_API_KEY) {
    return json(fallback);
  }

  try {
    const summary = await summarizeWithOpenAI(intent, flights, fallback, env);
    return json(summary);
  } catch (error) {
    console.error(JSON.stringify({ route: "/api/summary", error: String(error) }));
    return json(fallback);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      if (request.method === "POST" && url.pathname === "/api/intent") {
        return await handleIntent(request, env);
      }

      if (request.method === "POST" && url.pathname === "/api/search") {
        return await handleSearch(request);
      }

      if (request.method === "POST" && url.pathname === "/api/summary") {
        return await handleSummary(request, env);
      }

      if (url.pathname.startsWith("/api/")) {
        return errorResponse("Not found.", 404);
      }

      if (!env.ASSETS) {
        return errorResponse("ASSETS binding is missing.", 500);
      }

      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error(JSON.stringify({ route: url.pathname, error: String(error) }));
      return errorResponse("Unexpected server error.", 500);
    }
  },
};
