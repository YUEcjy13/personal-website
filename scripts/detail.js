(() => {
const siteData = window.siteData;
const { renderChips, renderSectionHeader, renderShell, resolvePath, setupReveal } = window.siteHelpers;

const app = document.querySelector("#app");
const { kind, slug } = document.body.dataset;

const collection = kind === "research" ? siteData.research : siteData.projects;
const item = collection.find((entry) => entry.slug === slug);

try {
  if (!item) {
    app.innerHTML = renderShell(
      `
      <main class="detail-page">
        <section class="detail-hero">
          <p class="eyebrow">Not Found</p>
          <h1>Page not found.</h1>
          <a class="button button-primary" href="${resolvePath("index.html")}">Back Home</a>
        </section>
      </main>
      `
    );
  } else {
    const extraLink =
      kind === "project"
        ? `<a class="button button-secondary" href="${item.repo}" target="_blank" rel="noreferrer">GitHub Repo</a>`
        : "";

    app.innerHTML = renderShell(
      `
      <main class="detail-page">
        <section class="detail-hero" data-reveal>
          <a class="back-link" href="${resolvePath("index.html")}">← Back to Home</a>
          <div class="card-topline">
            <span class="status-badge ${kind === "project" ? "accent" : ""}">${item.status}</span>
          </div>
          <h1>${item.title}</h1>
          <p class="detail-subtitle">${item.subtitle}</p>
          <p class="detail-summary">${item.summary}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="mailto:${siteData.profile.email}">Discuss This Work</a>
            ${extraLink}
          </div>
        </section>

        <section class="section">
          ${renderSectionHeader(
            "Overview",
            "Why this work matters",
            item.detail.whyItMatters
          )}
          <div class="detail-overview-grid">
            <article class="detail-card" data-reveal>
              <p class="mini-kicker">Challenge</p>
              <p>${item.detail.challenge}</p>
            </article>
            <article class="detail-card" data-reveal>
              <p class="mini-kicker">Approach</p>
              <p>${item.detail.approach}</p>
            </article>
          </div>
        </section>

        <section class="section">
          ${renderSectionHeader(
            kind === "project" ? "System" : "Research Notes",
            kind === "project" ? "Structured points interviewers can scan quickly." : "Public-safe summary without exposing the full submission.",
            "重点保留问题定义、方法主线与结果解释。"
          )}
          <div class="detail-section-grid">
            ${item.detail.sections
              .map(
                (section) => `
                  <article class="detail-card" data-reveal>
                    <h3>${section.title}</h3>
                    <ul class="bullet-list">
                      ${section.items.map((point) => `<li>${point}</li>`).join("")}
                    </ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="section">
          ${renderSectionHeader(
            "Results",
            kind === "project" ? "Telemetry and benchmark signals" : "Metrics that justify the claim",
            "我更偏好能解释“为什么更好”的结果，而不是只贴最终数字。"
          )}
          <div class="metric-grid detail-metrics">
            ${item.metrics
              .map(
                (metric) => `
                  <article class="metric-card" data-reveal>
                    <p>${metric.label}</p>
                    <strong>${metric.value}</strong>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="detail-notes" data-reveal>
            ${item.detail.resultNotes.map((note) => `<p>${note}</p>`).join("")}
          </div>
        </section>

        <section class="section">
          ${renderSectionHeader(
            "Keywords",
            "Topic map",
            "方便面试官快速判断这项工作与你要投的岗位是否匹配。"
          )}
          <div class="chip-cloud" data-reveal">
            ${renderChips(item.keywords || projectKeywordFallback(item))}
          </div>
        </section>
      </main>
      `
    );
  }

  setupReveal();
} catch (error) {
  console.error("Failed to render detail page", error);
  if (app) {
    app.innerHTML = `
      <main class="detail-page">
        <section class="detail-hero">
          <p class="eyebrow">Render Error</p>
          <h1>页面加载失败，请稍后重试。</h1>
          <a class="button button-primary" href="${resolvePath("index.html")}">Back Home</a>
        </section>
      </main>
    `;
  }
}

function projectKeywordFallback(project) {
  if (project.slug === "nanobot-plus") {
    return [
      "Agent System",
      "Execution Memory",
      "Reflection Memory",
      "Verifier",
      "Failure-aware Replanning",
      "Benchmark"
    ];
  }
  return [];
}
})();
