(function () {
  const catalog = [
    {
      id: "jal-suite-cdg",
      airline: "Japan Airlines",
      airlineCode: "JAL",
      route: "PVG → HND → CDG",
      city: "Paris",
      country: "France",
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
      route: "PVG → NRT → CDG",
      city: "Paris",
      country: "France",
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
      route: "PVG → CDG",
      city: "Paris",
      country: "France",
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
      route: "PVG → DOH → CDG",
      city: "Paris",
      country: "France",
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
      route: "PVG → HND → CDG",
      city: "Paris",
      country: "France",
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
      route: "PVG → HND → CDG → NCE",
      city: "Nice",
      country: "France",
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

  const examplePrompt = "我想在七月份去法国，商务舱，想睡得好一点，然后要日航";

  const elements = {
    runtimeStatus: document.getElementById("runtime-status"),
    form: document.getElementById("prompt-form"),
    promptInput: document.getElementById("prompt-input"),
    intentSource: document.getElementById("intent-source"),
    intentChips: document.getElementById("intent-chips"),
    intentAssumptions: document.getElementById("intent-assumptions"),
    queryLine: document.getElementById("query-line"),
    heroResult: document.getElementById("hero-result"),
    basicInfoPanel: document.getElementById("basic-info-panel"),
    summaryPanel: document.getElementById("summary-panel"),
    reviewPanel: document.getElementById("review-panel"),
    focusGrid: document.getElementById("focus-grid"),
    compareTable: document.getElementById("compare-table"),
    candidateGrid: document.getElementById("candidate-grid"),
  };

  function normalizeText(value) {
    return value.toLowerCase().replace(/[，。、“”‘’]/g, " ").replace(/\s+/g, " ").trim();
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function formatStops(stops) {
    if (stops === 0) return "直飞";
    return `${stops} 次中转`;
  }

  function parseLocalIntent(prompt) {
    const text = normalizeText(prompt || "");
    const assumptions = [];
    const priorities = [];
    const airlines = [];

    if (text.includes("睡") || text.includes("休息")) priorities.push("sleep");
    if (text.includes("隐私") || text.includes("有门")) priorities.push("privacy");
    if (text.includes("便宜") || text.includes("预算") || text.includes("值")) priorities.push("value");
    if (text.includes("直飞")) priorities.push("direct");
    if (text.includes("体验") || text.includes("舒服") || text.includes("高级")) priorities.push("experience");
    if (priorities.length === 0) priorities.push("balanced");

    if (text.includes("日航") || text.includes("jal") || text.includes("日本航空")) airlines.push("JAL");
    if (text.includes("ana") || text.includes("全日空")) airlines.push("ANA");
    if (text.includes("法航") || text.includes("air france")) airlines.push("AF");

    const destinationCity = text.includes("尼斯") || text.includes("nice")
      ? "Nice"
      : text.includes("巴黎") || text.includes("paris")
        ? "Paris"
        : null;
    const destinationCountry = destinationCity || text.includes("法国") || text.includes("france") ? "France" : null;
    const month = text.includes("七月") || text.includes("7月") || text.includes("july") ? "7月" : null;
    const cabin = text.includes("商务舱") || text.includes("business") ? "商务舱" : null;
    const maxStops = text.includes("直飞") ? 0 : text.includes("不要转机") ? 0 : 1;

    if (!destinationCountry) assumptions.push("未识别目的地，演示版会优先展示法国航线。");
    if (!destinationCity && (destinationCountry === "France" || !destinationCountry)) assumptions.push("未指定法国城市，先按巴黎结果展示。");
    if (!cabin) assumptions.push("未指定舱位，演示版先按商务舱处理。");
    if (!month) assumptions.push("未指定月份，先用当前演示航线展示。");
    if (!airlines.length) assumptions.push("未指定航司，系统会按综合适配度排序。");

    return {
      rawPrompt: prompt,
      destinationCountry: destinationCountry || "France",
      destinationCity: destinationCity || "Paris",
      travelMonth: month,
      cabin: cabin || "商务舱",
      priorities,
      preferredAirlines: airlines,
      maxStops,
      assumptions,
    };
  }

  function scoreFlight(intent, flight) {
    let score = flight.overallScore * 3;

    if (intent.destinationCity && flight.city === intent.destinationCity) score += 14;
    if (intent.destinationCountry && flight.country === intent.destinationCountry) score += 8;
    if (intent.cabin === flight.cabin) score += 6;
    if (flight.stops <= intent.maxStops) score += 5;
    else score -= flight.stops * 4;

    if (intent.preferredAirlines.includes(flight.airlineCode)) score += 18;
    else if (intent.preferredAirlines.length) score -= 4;

    intent.priorities.forEach((priority) => {
      if (priority === "sleep") score += flight.sleepScore * 2;
      if (priority === "privacy") score += flight.privacyScore * 1.8;
      if (priority === "value") score += flight.valueScore * 2;
      if (priority === "experience") score += flight.experienceScore * 1.8;
      if (priority === "direct") score += flight.stops === 0 ? 16 : Math.max(0, 8 - flight.stops * 6);
      if (priority === "balanced") score += flight.overallScore * 1.4;
    });

    return score;
  }

  function buildLocalSearch(intent) {
    const filtered = catalog
      .filter((flight) => flight.country === intent.destinationCountry)
      .filter((flight) => (intent.destinationCity ? flight.city === intent.destinationCity : true))
      .filter((flight) => flight.cabin === intent.cabin)
      .map((flight) => {
        const matchReasons = [];
        if (intent.preferredAirlines.includes(flight.airlineCode)) matchReasons.push("命中指定航司");
        if (intent.priorities.includes("sleep")) matchReasons.push(`睡眠 ${flight.sleepScore.toFixed(1)}`);
        if (intent.priorities.includes("privacy")) matchReasons.push(`隐私 ${flight.privacyScore.toFixed(1)}`);
        if (intent.priorities.includes("value")) matchReasons.push(`性价比 ${flight.valueScore.toFixed(1)}`);
        if (intent.priorities.includes("direct") && flight.stops === 0) matchReasons.push("直飞");
        return {
          ...flight,
          matchScore: Number(scoreFlight(intent, flight).toFixed(1)),
          matchReasons,
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 4);

    const topPick = filtered[0];
    const bestSleep = [...filtered].sort((a, b) => b.sleepScore - a.sleepScore)[0];
    const bestValue = [...filtered].sort((a, b) => b.valueScore - a.valueScore)[0];
    const bestDirect = [...filtered].sort((a, b) => a.stops - b.stops || a.durationMinutes - b.durationMinutes)[0];

    return {
      topPick,
      recommendations: filtered,
      focusCards: [
        { label: "最推荐", flight: topPick, note: "综合用户偏好、航司要求和座椅体验后排在第一位。" },
        { label: "睡眠最好", flight: bestSleep, note: "更适合把休息质量放在第一位的长途商务舱用户。" },
        { label: "更值", flight: bestValue, note: "如果你愿意牺牲一些高级感，它会是更务实的选择。" },
        { label: "通勤效率", flight: bestDirect, note: "中转更少，整体通勤摩擦更低。" },
      ].filter((item, index, array) => item.flight && array.findIndex((entry) => entry.flight.id === item.flight.id) === index),
    };
  }

  function buildLocalSummaries(intent, flights) {
    const items = flights.map((flight) => {
      const why = [];
      if (intent.preferredAirlines.includes(flight.airlineCode)) why.push("保留了你指定的航司偏好。");
      if (intent.priorities.includes("sleep")) why.push(`睡眠分 ${flight.sleepScore.toFixed(1)}，更适合长途休息。`);
      if (intent.priorities.includes("privacy")) why.push(`隐私分 ${flight.privacyScore.toFixed(1)}，更适合想要安静和包裹感的用户。`);
      if (intent.priorities.includes("value")) why.push(`价格 ${formatCurrency(flight.price)}，比更高端方案更容易接受。`);
      if (intent.priorities.includes("direct") && flight.stops === 0) why.push("直飞减少了中转打断和不确定性。");
      if (why.length < 2) why.push("综合硬件、体验和风险后，它是当前演示数据里更稳的选择。");

      return {
        id: flight.id,
        headline: intent.priorities.includes("sleep")
          ? "更适合把睡眠放第一位"
          : intent.priorities.includes("value")
            ? "更像务实型商务舱"
            : "综合更稳的一张票",
        whyRecommended: why.slice(0, 3),
        caution: [flight.risks[0] || "正式版需要补更多真实票价和时刻数据。"],
        publicReviewDigest: flight.publicReviewSnippets.slice(0, 3),
      };
    });

    return {
      items,
      source: "local-demo",
      disclaimer: "公开评价摘要来自演示评论样本，正式版应替换为真实评论源与出处。",
    };
  }

  async function postJson(url, payload) {
    const isFile = window.location.protocol === "file:";

    if (!isFile) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        return await response.json();
      } catch (error) {
        console.warn("API unavailable, falling back to local demo mode.", error);
      }
    }

    if (url === "/api/intent") {
      return { intent: parseLocalIntent(payload.prompt), source: "local-demo" };
    }

    if (url === "/api/search") {
      const search = buildLocalSearch(payload.intent);
      return { ...search, source: "local-demo", intent: payload.intent };
    }

    if (url === "/api/summary") {
      return buildLocalSummaries(payload.intent, payload.flights);
    }

    throw new Error(`Unknown local endpoint: ${url}`);
  }

  function renderIntent(intent, source) {
    const chips = [
      intent.travelMonth ? `时间：${intent.travelMonth}` : null,
      intent.destinationCountry ? `国家：${intent.destinationCountry}` : null,
      intent.destinationCity ? `城市：${intent.destinationCity}` : null,
      intent.cabin ? `舱位：${intent.cabin}` : null,
      ...(intent.priorities || []).map((item) => `偏好：${priorityLabel(item)}`),
      ...(intent.preferredAirlines || []).map((item) => `航司：${item}`),
    ].filter(Boolean);

    elements.intentSource.textContent = source === "openai"
      ? "当前由 OpenAI 解析"
      : source === "heuristic"
        ? "当前由后端规则解析"
        : "当前为本地演示解析";

    elements.intentChips.innerHTML = chips.map((chip) => `<span class="chip">${chip}</span>`).join("");
    elements.intentAssumptions.innerHTML = (intent.assumptions || []).length
      ? intent.assumptions.map((item) => `<li>${item}</li>`).join("")
      : "<li>没有额外默认假设。</li>";
  }

  function priorityLabel(value) {
    const mapping = {
      sleep: "睡眠",
      privacy: "隐私",
      value: "性价比",
      direct: "直飞效率",
      experience: "体验",
      balanced: "综合推荐",
    };

    return mapping[value] || value;
  }

  function renderHero(topPick, summary, queryLine) {
    if (!topPick) {
      elements.heroResult.innerHTML = "<p class='panel-body'>当前没有命中结果。</p>";
      return;
    }

    elements.queryLine.textContent = queryLine;

    elements.heroResult.innerHTML = `
      <div class="result-head">
        <div>
          <span class="source-pill">最推荐方案</span>
          <h3 class="result-title">${topPick.airline} · ${topPick.seat}</h3>
          <div class="muted-line">${topPick.route} · ${topPick.aircraft} · ${formatStops(topPick.stops)} · ${topPick.duration}</div>
        </div>
        <div class="price-block">
          <strong>${formatCurrency(topPick.price)}</strong>
          <span class="price-caption">当前演示价格</span>
        </div>
      </div>

      <div class="hero-meta">
        <span class="score-pill">综合 ${topPick.matchScore.toFixed(1)}</span>
        <span class="mini-tag">睡眠 ${topPick.sleepScore.toFixed(1)}</span>
        <span class="mini-tag">隐私 ${topPick.privacyScore.toFixed(1)}</span>
        <span class="mini-tag">性价比 ${topPick.valueScore.toFixed(1)}</span>
        <span class="door-tag ${topPick.hasDoor ? "is-on" : ""}">${topPick.hasDoor ? "有门" : "无门"}</span>
      </div>

      <p class="result-copy">${summary ? summary.headline : "这是当前更符合用户需求的候选方案。"}。${topPick.matchReasons.join(" / ") || "综合适配度最高"}。</p>

      <div class="seat-layout">
        <div class="seat-graphic">
          <div class="seat-shell">
            <div class="seat-headrest"></div>
            <div class="seat-bed"></div>
            <div class="seat-door ${topPick.hasDoor ? "is-on" : ""}"></div>
          </div>
        </div>

        <div class="seat-detail-grid">
          <div class="seat-metric">
            <span class="metric-label">布局</span>
            <strong class="seat-value">${topPick.seatModel.layout}</strong>
          </div>
          <div class="seat-metric">
            <span class="metric-label">床长</span>
            <strong class="seat-value">${topPick.seatModel.bedLengthCm} cm</strong>
          </div>
          <div class="seat-metric">
            <span class="metric-label">座椅宽度</span>
            <strong class="seat-value">${topPick.seatModel.widthInches}"</strong>
          </div>
          <div class="seat-metric">
            <span class="metric-label">座椅说明</span>
            <div class="seat-note">${topPick.seatModel.note}</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBasicInfo(topPick) {
    if (!topPick) {
      elements.basicInfoPanel.innerHTML = "<p class='panel-body'>暂无基础信息。</p>";
      return;
    }

    elements.basicInfoPanel.innerHTML = `
      <p class="panel-title">基本信息</p>
      <div class="basic-grid">
        <div class="basic-item">
          <span class="metric-label">航司</span>
          <strong class="metric-value">${topPick.airline}</strong>
        </div>
        <div class="basic-item">
          <span class="metric-label">航线</span>
          <strong class="metric-value">${topPick.city}</strong>
        </div>
        <div class="basic-item">
          <span class="metric-label">机型</span>
          <strong class="metric-value">${topPick.aircraft}</strong>
        </div>
        <div class="basic-item">
          <span class="metric-label">中转</span>
          <strong class="metric-value">${formatStops(topPick.stops)}</strong>
        </div>
        <div class="basic-item">
          <span class="metric-label">总时长</span>
          <strong class="metric-value">${topPick.duration}</strong>
        </div>
        <div class="basic-item">
          <span class="metric-label">座椅</span>
          <strong class="metric-value">${topPick.seat}</strong>
        </div>
      </div>
    `;
  }

  function renderSummary(summary, source) {
    if (!summary) {
      elements.summaryPanel.innerHTML = "<p class='panel-body'>暂无推荐摘要。</p>";
      return;
    }

    elements.summaryPanel.innerHTML = `
      <p class="panel-title">AI 推荐理由</p>
      <div class="summary-tags">
        <span class="source-pill">${source === "openai" ? "OpenAI 总结" : source === "heuristic" ? "后端规则总结" : "本地演示总结"}</span>
      </div>
      <ul class="summary-list">
        ${summary.whyRecommended.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="panel-body" style="margin-top:14px;">
        风险提醒：${summary.caution.join(" / ")}
      </div>
    `;
  }

  function renderReviews(summary, disclaimer) {
    if (!summary) {
      elements.reviewPanel.innerHTML = "<p class='panel-body'>暂无公开评价摘要。</p>";
      return;
    }

    elements.reviewPanel.innerHTML = `
      <p class="panel-title">公开评价摘要</p>
      <ul class="review-list">
        ${summary.publicReviewDigest.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p class="review-note" style="margin-top:14px;">${disclaimer}</p>
    `;
  }

  function renderFocusCards(focusCards) {
    elements.focusGrid.innerHTML = focusCards.map((item) => `
      <article class="focus-tile">
        <p class="focus-label">${item.label}</p>
        <h3 class="focus-title">${item.flight.airline}</h3>
        <div class="candidate-meta">${item.flight.seat} · ${formatCurrency(item.flight.price)} · ${formatStops(item.flight.stops)}</div>
        <p class="focus-copy">${item.note}</p>
      </article>
    `).join("");
  }

  function renderCompareTable(flights) {
    if (!flights.length) {
      elements.compareTable.innerHTML = "";
      return;
    }

    const visible = flights.slice(0, 3);
    elements.compareTable.innerHTML = `
      <thead>
        <tr>
          <th>方案</th>
          <th>价格</th>
          <th>总时长</th>
          <th>睡眠</th>
          <th>隐私</th>
          <th>中转</th>
        </tr>
      </thead>
      <tbody>
        ${visible.map((flight) => `
          <tr>
            <td>${flight.airline} / ${flight.seat}</td>
            <td>${formatCurrency(flight.price)}</td>
            <td>${flight.duration}</td>
            <td>${flight.sleepScore.toFixed(1)}</td>
            <td>${flight.privacyScore.toFixed(1)}</td>
            <td>${formatStops(flight.stops)}</td>
          </tr>
        `).join("")}
      </tbody>
    `;
  }

  function renderCandidates(flights, summaries) {
    const summaryMap = {};
    summaries.forEach((item) => {
      summaryMap[item.id] = item;
    });

    elements.candidateGrid.innerHTML = flights.map((flight, index) => {
      const summary = summaryMap[flight.id];
      return `
        <article class="candidate-card">
          <div class="candidate-head">
            <div>
              <span class="source-pill">${index === 0 ? "当前第一选择" : `候选 ${index + 1}`}</span>
              <h3 class="candidate-title">${flight.airline}</h3>
              <span class="candidate-meta">${flight.route} · ${flight.aircraft} · ${flight.seat}</span>
            </div>
            <div class="price-block">
              <strong>${formatCurrency(flight.price)}</strong>
              <span class="price-caption">综合 ${flight.matchScore.toFixed(1)}</span>
            </div>
          </div>
          <div class="candidate-tags">
            ${flight.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}
          </div>
          <p class="candidate-copy">${summary ? summary.headline : "这是当前演示数据中的备选方案。"}。</p>
          <p class="candidate-copy">不足提醒：${(summary && summary.caution[0]) || flight.risks[0]}</p>
        </article>
      `;
    }).join("");
  }

  function renderAll(intentResponse, searchResponse, summaryResponse) {
    const { intent, source: intentSource } = intentResponse;
    const { topPick, recommendations, focusCards, source: searchSource } = searchResponse;
    const { items, disclaimer, source: summarySource } = summaryResponse;
    const topSummary = items.find((item) => item.id === topPick.id);
    const runtimeLabel = summarySource === "openai"
      ? "OpenAI 已接入"
      : searchSource === "heuristic"
        ? "Worker 规则模式"
        : "本地演示模式";

    elements.runtimeStatus.textContent = runtimeLabel;
    renderIntent(intent, intentSource);
    renderHero(topPick, topSummary, `${intent.destinationCountry} / ${intent.destinationCity} / ${intent.cabin}`);
    renderBasicInfo(topPick);
    renderSummary(topSummary, summarySource);
    renderReviews(topSummary, disclaimer);
    renderFocusCards(focusCards);
    renderCompareTable(recommendations);
    renderCandidates(recommendations, items);
  }

  async function runFlow(prompt) {
    elements.runtimeStatus.textContent = "处理中";
    const intentResponse = await postJson("/api/intent", { prompt });
    const searchResponse = await postJson("/api/search", { intent: intentResponse.intent });
    const summaryResponse = await postJson("/api/summary", {
      intent: intentResponse.intent,
      flights: searchResponse.recommendations.slice(0, 4),
    });

    renderAll(intentResponse, searchResponse, summaryResponse);
  }

  elements.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const prompt = elements.promptInput.value.trim();
    if (!prompt) return;
    await runFlow(prompt);
  });

  document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      elements.promptInput.value = button.dataset.prompt;
      await runFlow(button.dataset.prompt);
    });
  });

  elements.promptInput.value = examplePrompt;
  runFlow(examplePrompt);
})();
