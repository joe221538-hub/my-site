const flightCatalog = [
  {
    id: "jal-suite-cdg",
    airline: "Japan Airlines",
    airlineCode: "JAL",
    airlineAliases: ["jal", "日航", "日本航空", "japan airlines"],
    route: "PVG → HND → CDG",
    city: "Paris",
    country: "France",
    cityAliases: ["paris", "巴黎", "cdg"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "A350-1000",
    seat: "Business Suite",
    hasDoor: true,
    stops: 1,
    duration: "17h 50m",
    durationMinutes: 1070,
    price: 24600,
    sleepScore: 9.6,
    privacyScore: 9.5,
    valueScore: 8.2,
    experienceScore: 9.5,
    overallScore: 9.4,
    transferScore: 8.6,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 198,
      widthInches: 22,
      note: "新一代套间，包裹感和安静度都更适合长途睡眠。",
    },
    tags: ["睡眠强", "有门", "日航", "巴黎"],
    risks: ["东京转机仍然会拉长总耗时。"],
    publicReviewSnippets: [
      "公开评论里对安静度和舱内质感评价很高。",
      "不少人提到长途睡眠连续性更好。",
      "缺点通常集中在价格和转机时间。",
    ],
  },
  {
    id: "jal-sky-cdg",
    airline: "Japan Airlines",
    airlineCode: "JAL",
    airlineAliases: ["jal", "日航", "日本航空", "japan airlines"],
    route: "PVG → NRT → CDG",
    city: "Paris",
    country: "France",
    cityAliases: ["paris", "巴黎", "cdg"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "787-9",
    seat: "Sky Suite III",
    hasDoor: false,
    stops: 1,
    duration: "18h 20m",
    durationMinutes: 1100,
    price: 21400,
    sleepScore: 8.5,
    privacyScore: 7.8,
    valueScore: 9.0,
    experienceScore: 8.1,
    overallScore: 8.5,
    transferScore: 8.0,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 188,
      widthInches: 20,
      note: "价格更友好，但隐私和包裹感不如新套间。",
    },
    tags: ["更值", "日航", "巴黎", "老一代座椅"],
    risks: ["没有门，隐私和新鲜感明显弱一些。"],
    publicReviewSnippets: [
      "大家普遍觉得整体稳，但新鲜感不强。",
      "预算有限时会被当作更务实的选择。",
      "对隐私和高级感敏感的人会更偏向新舱型。",
    ],
  },
  {
    id: "af-direct-cdg",
    airline: "Air France",
    airlineCode: "AF",
    airlineAliases: ["af", "air france", "法航"],
    route: "PVG → CDG",
    city: "Paris",
    country: "France",
    cityAliases: ["paris", "巴黎", "cdg"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "777-300ER",
    seat: "Air France Business Suite",
    hasDoor: true,
    stops: 0,
    duration: "13h 25m",
    durationMinutes: 805,
    price: 25900,
    sleepScore: 8.9,
    privacyScore: 9.1,
    valueScore: 7.8,
    experienceScore: 9.0,
    overallScore: 9.1,
    transferScore: 9.9,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 195,
      widthInches: 21,
      note: "直飞效率强，减少中转对睡眠连续性的破坏。",
    },
    tags: ["直飞", "有门", "巴黎", "效率高"],
    risks: ["价格偏高，性价比不如部分中转方案。"],
    publicReviewSnippets: [
      "公开评价里直飞效率是最常被提到的优势。",
      "大家对新商务舱的隐私感评价稳定。",
      "缺点主要在价格和票量波动。",
    ],
  },
  {
    id: "qsuite-cdg",
    airline: "Qatar Airways",
    airlineCode: "QR",
    airlineAliases: ["qatar", "qatar airways", "卡塔尔", "卡航", "qr"],
    route: "PVG → DOH → CDG",
    city: "Paris",
    country: "France",
    cityAliases: ["paris", "巴黎", "cdg"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "777-300ER",
    seat: "Qsuite",
    hasDoor: true,
    stops: 1,
    duration: "17h 40m",
    durationMinutes: 1060,
    price: 23200,
    sleepScore: 9.3,
    privacyScore: 9.8,
    valueScore: 8.8,
    experienceScore: 9.4,
    overallScore: 9.3,
    transferScore: 8.7,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 200,
      widthInches: 21.5,
      note: "隐私和空间感很强，适合在意独立性的用户。",
    },
    tags: ["隐私强", "有门", "巴黎", "综合强"],
    risks: ["多哈中转成熟，但整体时长不如直飞。"],
    publicReviewSnippets: [
      "公开评论普遍把它当作隐私感的标杆。",
      "很多人觉得它适合长途恢复体力。",
      "中转时间安排会影响整体体感。",
    ],
  },
  {
    id: "ana-room-cdg",
    airline: "ANA",
    airlineCode: "ANA",
    airlineAliases: ["ana", "全日空"],
    route: "PVG → HND → CDG",
    city: "Paris",
    country: "France",
    cityAliases: ["paris", "巴黎", "cdg"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "777-300ER",
    seat: "The Room",
    hasDoor: true,
    stops: 1,
    duration: "17h 15m",
    durationMinutes: 1035,
    price: 24100,
    sleepScore: 9.2,
    privacyScore: 9.4,
    valueScore: 8.4,
    experienceScore: 9.2,
    overallScore: 9.1,
    transferScore: 8.8,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 194,
      widthInches: 38,
      note: "空间感很强，更像宽大的私人区域。",
    },
    tags: ["空间大", "有门", "巴黎", "体验强"],
    risks: ["价格不低，而且并非每个班次都能保证同一套座椅。"],
    publicReviewSnippets: [
      "公开评价里最常见的是‘很宽敞’。",
      "睡眠和工作都比较舒服。",
      "大家也会担心具体执飞机型差异。",
    ],
  },
  {
    id: "jal-nice",
    airline: "Japan Airlines",
    airlineCode: "JAL",
    airlineAliases: ["jal", "日航", "日本航空", "japan airlines"],
    route: "PVG → HND → CDG → NCE",
    city: "Nice",
    country: "France",
    cityAliases: ["nice", "尼斯", "nce"],
    countryAliases: ["france", "法国"],
    cabin: "商务舱",
    aircraft: "A350-1000 / A320",
    seat: "Business Suite + European J",
    hasDoor: true,
    stops: 2,
    duration: "20h 35m",
    durationMinutes: 1235,
    price: 23800,
    sleepScore: 9.0,
    privacyScore: 9.1,
    valueScore: 7.9,
    experienceScore: 8.8,
    overallScore: 8.7,
    transferScore: 6.6,
    seatModel: {
      layout: "1-2-1",
      bedLengthCm: 198,
      widthInches: 22,
      note: "主航段依然优秀，但欧洲内短程衔接会拉低整体体感。",
    },
    tags: ["法国", "日航", "睡眠好", "中转更多"],
    risks: ["两段转机会明显增加摩擦和不确定性。"],
    publicReviewSnippets: [
      "长航段本身评价很高。",
      "问题主要出在欧洲内衔接和总耗时。",
      "适合必须去法国南部但仍偏好日航的人。",
    ],
  },
];

function normalizeText(value = "") {
  return value.toLowerCase().replace(/[，。、“”‘’]/g, " ").replace(/\s+/g, " ").trim();
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function parseBudget(text) {
  const direct = text.match(/(?:¥|￥|cny)?\s*(\d{4,5})/i);
  if (direct) return Number(direct[1]);

  const wan = text.match(/(\d+(?:\.\d+)?)\s*w/i);
  if (wan) return Math.round(Number(wan[1]) * 10000);

  return null;
}

function extractAirlines(text) {
  const found = flightCatalog.reduce((accumulator, flight) => {
    if (flight.airlineAliases.some((alias) => text.includes(alias)) && !accumulator.includes(flight.airlineCode)) {
      accumulator.push(flight.airlineCode);
    }
    return accumulator;
  }, []);

  return found;
}

function priorityLabel(key) {
  const labels = {
    sleep: "睡眠",
    privacy: "隐私",
    value: "性价比",
    direct: "直飞效率",
    experience: "体验",
    balanced: "综合推荐",
  };

  return labels[key] || key;
}

function buildDefaultAssumptions(intent) {
  const assumptions = [];

  if (!intent.destinationCountry) assumptions.push("未识别目的地国家，演示版先按法国航线展示。");
  if (!intent.destinationCity && (intent.destinationCountry === "France" || !intent.destinationCountry)) {
    assumptions.push("未指定法国城市，先按巴黎优先展示。");
  }
  if (!intent.cabin) assumptions.push("未指定舱位，先按商务舱处理。");
  if (!intent.travelMonth) assumptions.push("未指定月份，演示版先按当前样本航线展示。");
  if (!intent.preferredAirlines.length) assumptions.push("未指定航司，系统会按综合匹配度排序。");
  if (!intent.priorities.length) assumptions.push("未指定核心偏好，先按综合推荐排序。");

  return assumptions;
}

export function parseIntentHeuristically(prompt = "") {
  const text = normalizeText(prompt);
  const priorities = [];

  if (hasAny(text, ["睡", "休息", "睡得好", "sleep"])) priorities.push("sleep");
  if (hasAny(text, ["隐私", "有门", "privacy"])) priorities.push("privacy");
  if (hasAny(text, ["预算", "便宜", "值", "划算", "budget"])) priorities.push("value");
  if (hasAny(text, ["直飞", "不要转机", "nonstop"])) priorities.push("direct");
  if (hasAny(text, ["体验", "舒服", "高级", "experience"])) priorities.push("experience");

  const destinationCity = hasAny(text, ["nice", "尼斯", "nce"])
    ? "Nice"
    : hasAny(text, ["paris", "巴黎", "cdg"])
      ? "Paris"
      : null;
  const destinationCountry = destinationCity || hasAny(text, ["france", "法国"]) ? "France" : null;
  const travelMonth = hasAny(text, ["七月", "7月", "july"]) ? "7月" : null;
  const cabin = hasAny(text, ["商务舱", "business"]) ? "商务舱" : null;
  const maxStops = hasAny(text, ["直飞", "不要转机", "nonstop"]) ? 0 : 1;
  const budgetCeilingCny = parseBudget(text);
  const preferredAirlines = extractAirlines(text);

  const intent = {
    rawPrompt: prompt,
    destinationCountry: destinationCountry || "France",
    destinationCity: destinationCity || "Paris",
    travelMonth,
    cabin: cabin || "商务舱",
    priorities: priorities.length ? priorities : ["balanced"],
    preferredAirlines,
    budgetCeilingCny,
    maxStops,
  };

  return {
    ...intent,
    assumptions: buildDefaultAssumptions({
      ...intent,
      destinationCountry,
      destinationCity,
      cabin,
      travelMonth,
      priorities,
    }),
  };
}

function scoreFlight(intent, flight) {
  let score = flight.overallScore * 3;

  if (intent.destinationCountry && flight.country === intent.destinationCountry) score += 8;
  if (intent.destinationCity && flight.city === intent.destinationCity) score += 14;
  if (flight.cabin === intent.cabin) score += 6;
  if (flight.stops <= intent.maxStops) score += 5;
  else score -= flight.stops * 4;

  if (intent.preferredAirlines.includes(flight.airlineCode)) score += 18;
  else if (intent.preferredAirlines.length) score -= 4;

  if (intent.budgetCeilingCny) {
    score += flight.price <= intent.budgetCeilingCny ? 6 : -8;
  }

  for (const priority of intent.priorities) {
    if (priority === "sleep") score += flight.sleepScore * 2;
    if (priority === "privacy") score += flight.privacyScore * 1.8;
    if (priority === "value") score += flight.valueScore * 2;
    if (priority === "experience") score += flight.experienceScore * 1.8;
    if (priority === "direct") score += flight.stops === 0 ? 16 : Math.max(0, 8 - flight.stops * 6);
    if (priority === "balanced") score += flight.overallScore * 1.4;
  }

  return Number(score.toFixed(1));
}

function buildMatchReasons(intent, flight) {
  const reasons = [];

  if (intent.preferredAirlines.includes(flight.airlineCode)) reasons.push("命中指定航司");
  if (intent.priorities.includes("sleep")) reasons.push(`睡眠 ${flight.sleepScore.toFixed(1)}`);
  if (intent.priorities.includes("privacy")) reasons.push(`隐私 ${flight.privacyScore.toFixed(1)}`);
  if (intent.priorities.includes("value")) reasons.push(`性价比 ${flight.valueScore.toFixed(1)}`);
  if (intent.priorities.includes("direct") && flight.stops === 0) reasons.push("直飞");
  if (intent.priorities.includes("experience")) reasons.push(`体验 ${flight.experienceScore.toFixed(1)}`);
  if (reasons.length === 0) reasons.push(`综合 ${flight.overallScore.toFixed(1)}`);

  return reasons;
}

function uniqueFocusCards(cards) {
  const seen = new Set();
  return cards.filter((item) => {
    if (!item.flight) return false;
    if (seen.has(item.flight.id)) return false;
    seen.add(item.flight.id);
    return true;
  });
}

export function searchFlights(intentInput) {
  const intent = {
    ...parseIntentHeuristically(intentInput.rawPrompt || ""),
    ...intentInput,
  };

  const recommendations = flightCatalog
    .filter((flight) => flight.country === intent.destinationCountry)
    .filter((flight) => (intent.destinationCity ? flight.city === intent.destinationCity : true))
    .filter((flight) => flight.cabin === intent.cabin)
    .map((flight) => ({
      ...flight,
      matchScore: scoreFlight(intent, flight),
      matchReasons: buildMatchReasons(intent, flight),
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);

  const topPick = recommendations[0] || null;
  const bestSleep = [...recommendations].sort((a, b) => b.sleepScore - a.sleepScore)[0] || null;
  const bestValue = [...recommendations].sort((a, b) => b.valueScore - a.valueScore)[0] || null;
  const bestDirect = [...recommendations].sort((a, b) => a.stops - b.stops || a.durationMinutes - b.durationMinutes)[0] || null;

  return {
    intent,
    source: "heuristic",
    topPick,
    recommendations,
    focusCards: uniqueFocusCards([
      {
        label: "最推荐",
        flight: topPick,
        note: "综合用户偏好、航司要求和座椅体验后排在第一位。",
      },
      {
        label: "睡眠最好",
        flight: bestSleep,
        note: "更适合把休息质量放在第一位的长途商务舱用户。",
      },
      {
        label: "更值",
        flight: bestValue,
        note: "如果你愿意牺牲一些高级感，它会是更务实的选择。",
      },
      {
        label: "通勤效率",
        flight: bestDirect,
        note: "中转更少，整体通勤摩擦更低。",
      },
    ]),
  };
}

function buildHeadline(intent, flight) {
  if (intent.preferredAirlines.includes(flight.airlineCode) && intent.priorities.includes("sleep")) {
    return "保留指定航司前提下，这张更适合长途睡眠";
  }
  if (intent.priorities.includes("direct") && flight.stops === 0) {
    return "如果你最烦中转，这张会更省心";
  }
  if (intent.priorities.includes("value")) {
    return "更像务实型商务舱，不是最顶但更值";
  }
  if (intent.priorities.includes("privacy")) {
    return "如果你更看重包裹感和独立性，这张更稳";
  }
  return "综合硬件、体验和风险后，它是当前更稳的一张票";
}

export function buildFallbackSummaries(intent, flights) {
  return {
    source: "heuristic",
    disclaimer: "公开评价摘要来自系统对演示评论样本的整理，正式版应接真实评论来源与出处。",
    items: flights.map((flight) => {
      const whyRecommended = [];

      if (intent.preferredAirlines.includes(flight.airlineCode)) {
        whyRecommended.push("保留了你指定的航司偏好。");
      }
      if (intent.priorities.includes("sleep")) {
        whyRecommended.push(`睡眠分 ${flight.sleepScore.toFixed(1)}，更适合长途休息。`);
      }
      if (intent.priorities.includes("privacy")) {
        whyRecommended.push(`隐私分 ${flight.privacyScore.toFixed(1)}，更适合想要安静和包裹感的用户。`);
      }
      if (intent.priorities.includes("value")) {
        whyRecommended.push(`价格 ${flight.price} 元，比更高端方案更容易接受。`);
      }
      if (intent.priorities.includes("direct") && flight.stops === 0) {
        whyRecommended.push("直飞减少了中转打断和额外不确定性。");
      }
      if (intent.priorities.includes("experience")) {
        whyRecommended.push(`体验分 ${flight.experienceScore.toFixed(1)}，更接近高端出行预期。`);
      }
      if (whyRecommended.length < 2) {
        whyRecommended.push("综合硬件、体验和风险后，它是当前演示数据里更稳的选择。");
      }

      return {
        id: flight.id,
        headline: buildHeadline(intent, flight),
        whyRecommended: whyRecommended.slice(0, 3),
        caution: [flight.risks[0] || "正式版需要补更多真实票价和时刻数据。"],
        publicReviewDigest: flight.publicReviewSnippets.slice(0, 3),
      };
    }),
  };
}

export { flightCatalog, priorityLabel };
