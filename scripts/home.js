(() => {
const siteData = window.siteData;
const {
  renderButtons,
  renderChips,
  renderSectionHeader,
  renderShell,
  resolvePath,
  setupAwardModal,
  setupReveal
} = window.siteHelpers;

const project = siteData.projects[0];

const app = document.querySelector("#app");

try {
  app.innerHTML = renderShell(
    `
    <main>
      <section class="hero">
        <div class="hero-copy" data-reveal>
          <p class="eyebrow">Personal site for retrieval and agent systems</p>
          <h1>多模态检索、视觉文档检索与 Agent 系统研究。</h1>
          <p class="hero-lead">
            ${siteData.profile.nameZh} · ${siteData.profile.nameEn}<br />
            ${siteData.profile.titleZh}<br />
            <span>${siteData.profile.titleEn}</span>
          </p>
          <p class="hero-subtitle">${siteData.profile.subtitle}</p>
          <div class="hero-chips">${renderChips(siteData.profile.focus)}</div>
          <div class="hero-actions">${renderButtons(siteData.profile.quickLinks)}</div>
        </div>
        <div class="hero-aside" data-reveal>
          <div class="portrait-card">
            <div class="portrait-halo"></div>
            <img src="${resolvePath(siteData.profile.avatar)}" alt="${siteData.profile.nameZh}" />
          </div>
          <div class="signal-panel">
            ${siteData.profile.heroStats
              .map(
                (item) => `
                  <article class="signal-card">
                    <p class="signal-value">${item.value}</p>
                    <p class="signal-label">${item.label}</p>
                    <p class="signal-note">${item.note}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="pillar-strip">
        ${siteData.pillars
          .map(
            (pillar) => `
              <article class="pillar-card" data-reveal>
                <h3>${pillar.title}</h3>
                <p>${pillar.body}</p>
              </article>
            `
          )
          .join("")}
      </section>

      <section id="about" class="section">
        ${renderSectionHeader(
          "About",
          "研究导向，但不止停留在论文摘要里。",
          "希望把正在做的研究、项目和积累，持续整理成一个长期可更新的个人主页。"
        )}
        <div class="about-grid">
          <div class="about-summary" data-reveal>
            ${siteData.profile.summaryPoints.map((item) => `<p>${item}</p>`).join("")}
          </div>
          <div class="about-focus-card" data-reveal>
            <p class="mini-kicker">Current Focus</p>
            <ul>
              <li>多模态检索与视觉文档检索中的 evidence grounding</li>
              <li>RAG / Agent 系统中的 memory、diagnosis 与 replanning</li>
              <li>围绕研究项目进行实验设计、系统实现与结果整理</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="research" class="section">
        ${renderSectionHeader(
          "Research",
          "第一作者在投工作，强调问题定义、机制设计与结果解释。",
          "公开站点只展示摘要级信息与关键结果，避免暴露双盲投稿全文。"
        )}
        <div class="research-grid">
          ${siteData.research
            .map(
              (item) => `
                <article class="research-card" data-reveal>
                  <div class="card-topline">
                    <span class="status-badge">${item.status}</span>
                    <a class="text-link" href="${resolvePath(item.href)}">Extended Summary</a>
                  </div>
                  <h3>${item.title}</h3>
                  <p class="card-subtitle">${item.subtitle}</p>
                  <p class="card-problem">${item.problem}</p>
                  <p class="card-summary">${item.summary}</p>
                  <ul class="bullet-list">
                    ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
                  </ul>
                  <div class="metric-stack">
                    ${item.metrics
                      .map(
                        (metric) => `
                          <div class="metric-inline">
                            <span>${metric.label}</span>
                            <strong>${metric.value}</strong>
                          </div>
                        `
                      )
                      .join("")}
                  </div>
                  <div class="chip-row">${renderChips(item.keywords)}</div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section id="project" class="section project-spotlight">
        ${renderSectionHeader(
          "Project Spotlight",
          "一个持续迭代中的 Agent 系统项目。",
          "Nanobot+ 集中展示了我在 memory、verification、reflection 和执行闭环上的工程实现。"
        )}
        <div class="spotlight-grid">
          <div class="spotlight-copy" data-reveal>
            <div class="card-topline">
              <span class="status-badge accent">${project.status}</span>
              <a class="text-link" href="${resolvePath(project.href)}">Open Detail Page</a>
            </div>
            <h3>${project.title}</h3>
            <p class="card-subtitle">${project.subtitle}</p>
            <p class="card-summary">${project.summary}</p>
            <div class="loop-ribbon">
              ${project.loop.map((step) => `<span>${step}</span>`).join("")}
            </div>
            <ul class="bullet-list">
              ${project.engineering.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="hero-actions">
              <a class="button button-primary" href="${resolvePath(project.href)}">Read Case Study</a>
              <a class="button button-secondary" href="${project.repo}" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div class="spotlight-panel" data-reveal>
            <div class="metric-grid">
              ${project.spotlightPoints
                .map(
                  (metric) => `
                    <article class="metric-card">
                      <p>${metric.label}</p>
                      <strong>${metric.value}</strong>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="section">
        ${renderSectionHeader(
          "Education & Experience",
          "研究背景、学业信号与工业实习经历形成互补。",
          "学术方向聚焦检索与 Agent，同时具备实验复现、系统实现和性能权衡经验。"
        )}
        <div class="timeline-grid">
          <div class="timeline-column">
            ${siteData.education
              .map(
                (item) => `
                  <article class="timeline-card" data-reveal>
                    <p class="timeline-period">${item.period}</p>
                    <h3>${item.school}</h3>
                    <p class="timeline-degree">${item.degree}</p>
                    <p>${item.details}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="timeline-column">
            ${siteData.experience
              .map(
                (item) => `
                  <article class="timeline-card emphasis" data-reveal>
                    <p class="timeline-period">${item.period}</p>
                    <h3>${item.org}</h3>
                    <p class="timeline-degree">${item.role} · ${item.title}</p>
                    <ul class="bullet-list">
                      ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                    </ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section id="awards" class="section">
        ${renderSectionHeader(
          "Awards",
          "荣誉不是简单堆证书，而是构成可信度的长期信号。",
          "首页精选最能代表学业、英文能力与竞赛强度的条目，其余材料放到证据墙中查看。"
        )}
        <div class="award-grid">
          ${siteData.awards.featured
            .map(
              (item) => `
                <article class="award-card" data-reveal>
                  <span class="award-tag">${item.tag}</span>
                  <h3>${item.name}</h3>
                  <p>${item.note}</p>
                  <a class="text-link" href="${resolvePath(item.href)}" target="_blank" rel="noreferrer">View Proof</a>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="awards-actions" data-reveal>
          <button class="button button-secondary" type="button" data-open-awards>View More Materials</button>
        </div>
      </section>

      <section id="contact" class="section section-contact">
        ${renderSectionHeader(
          "Contact",
          "如果你正在寻找能把检索研究与 Agent 工程连接起来的实习生，可以直接联系我。",
          "当前已公开邮箱、网站、GitHub 与简历下载入口，其他外链资料可继续补充到下一版。"
        )}
        <div class="contact-card" data-reveal>
          <div>
            <p class="mini-kicker">Open to internships</p>
            <h3>大模型算法 / 多模态检索 / RAG & Agent 实习</h3>
            <p>邮箱：<a href="mailto:${siteData.profile.email}">${siteData.profile.email}</a></p>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="mailto:${siteData.profile.email}">Send Email</a>
            <a class="button button-secondary" href="${siteData.deployment.liveSite}" target="_blank" rel="noreferrer">Website</a>
            <a class="button button-secondary" href="${siteData.profile.github}" target="_blank" rel="noreferrer">GitHub</a>
            <a class="button button-secondary" href="${resolvePath(siteData.profile.resume)}" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </div>
      </section>
    </main>

    <div class="modal" data-awards-modal>
      <div class="modal-panel">
        <div class="modal-header">
          <div>
            <p class="mini-kicker">Proof Wall</p>
            <h3>Selected Awards & Certificates</h3>
          </div>
          <button class="modal-close" type="button" data-close-awards aria-label="Close awards">×</button>
        </div>
        <div class="proof-grid">
          ${siteData.awards.all
            .map(
              (award) => `
                <article class="proof-card">
                  ${
                    award.preview
                      ? `<div class="proof-preview"><img src="${resolvePath(award.preview)}" alt="${award.name}" /></div>`
                      : `<div class="proof-preview placeholder"><span>${award.type}</span></div>`
                  }
                  <div class="proof-copy">
                    <h4>${award.name}</h4>
                    <a class="text-link" href="${resolvePath(award.href)}" target="_blank" rel="noreferrer">Open Material</a>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
    `,
    ""
  );

  setupReveal();
  setupAwardModal();
} catch (error) {
  console.error("Failed to render homepage", error);
  if (app) {
    app.innerHTML = `
      <main class="detail-page">
        <section class="detail-hero">
          <p class="eyebrow">Render Error</p>
          <h1>页面加载失败，请稍后重试。</h1>
          <p class="detail-summary">If this persists, please contact ${siteData.profile.email}.</p>
        </section>
      </main>
    `;
  }
}
})();
