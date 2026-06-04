(() => {
const siteData = window.siteData;

function getBasePath() {
  return document.body.dataset.page === "detail" ? "../" : "./";
}

function resolvePath(path) {
  if (!path) return "#";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  return `${getBasePath()}${path}`;
}

function renderShell(content, currentSection = "") {
  const isDetailPage = document.body.dataset.page === "detail";
  const nav = siteData.navigation
    .map(
      (item) => `
        <a class="nav-link ${currentSection === item.href ? "is-current" : ""}" href="${resolvePath(
          item.href.startsWith("#") && isDetailPage ? `index.html${item.href}` : item.href
        )}">${item.label}</a>
      `
    )
    .join("");

  return `
    <div class="page-shell">
      <div class="page-backdrop"></div>
      <header class="site-header">
        <a class="brand" href="${resolvePath("index.html")}">
          <span class="brand-mark">JC</span>
          <span class="brand-text">
            <strong>${siteData.profile.nameZh}</strong>
            <span>${siteData.profile.nameEn}</span>
          </span>
        </a>
        <nav class="site-nav">${nav}</nav>
        <a class="header-cta" href="${resolvePath(siteData.profile.resume)}" target="_blank" rel="noreferrer">CV</a>
      </header>
      ${content}
      <footer class="site-footer">
        <div>
          <p class="footer-name">${siteData.profile.nameZh} · ${siteData.profile.nameEn}</p>
          <p class="footer-copy">Focused on multimodal retrieval, visual document retrieval, and long-horizon agent execution.</p>
        </div>
        <div class="footer-links">
          <a href="mailto:${siteData.profile.email}">${siteData.profile.email}</a>
          <a href="${siteData.deployment.liveSite}" target="_blank" rel="noreferrer">Website</a>
          <a href="${siteData.profile.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${resolvePath(siteData.profile.resume)}" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </footer>
    </div>
  `;
}

function renderSectionHeader(kicker, title, description) {
  return `
    <div class="section-heading" data-reveal>
      <p class="section-kicker">${kicker}</p>
      <h2>${title}</h2>
      <p class="section-description">${description}</p>
    </div>
  `;
}

function renderChips(items) {
  return items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function renderButtons(items) {
  return items
    .map(
      (item) => `
        <a class="button ${item.style === "primary" ? "button-primary" : "button-secondary"}" href="${resolvePath(
          item.href
        )}" ${item.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
          ${item.label}
        </a>
      `
    )
    .join("");
}

function setupReveal() {
  document.body.classList.add("enhanced");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function setupAwardModal() {
  const modal = document.querySelector("[data-awards-modal]");
  const openButton = document.querySelector("[data-open-awards]");
  const closeButton = document.querySelector("[data-close-awards]");

  if (!modal || !openButton || !closeButton) return;

  const close = () => {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  };

  openButton.addEventListener("click", () => {
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  });

  closeButton.addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

window.siteHelpers = {
  getBasePath,
  resolvePath,
  renderShell,
  renderSectionHeader,
  renderChips,
  renderButtons,
  setupReveal,
  setupAwardModal
};
})();
