(function () {
  const data = window.siteContent;
  const app = document.querySelector("#app");

  const externalAttributes = (link) => link.external ? ' target="_blank" rel="noreferrer"' : "";
  const linkList = (links) => `<span class="links">${links.map((link) => `<a href="${link.href}"${externalAttributes(link)}>${link.label}</a>`).join("")}</span>`;

  const publicationCard = (paper) => `
    <article class="publication" id="${paper.key}">
      <div class="publication-thumb-wrap">
        <img class="publication-thumb" src="${paper.image}" alt="${paper.imageAlt}" loading="lazy" />
        <span class="badge">${paper.venue} · ${paper.status}</span>
      </div>
      <div>
        <h3><a href="${paper.links[0].href}" target="_blank" rel="noreferrer">${paper.title}</a></h3>
        <p class="author"><strong>Jiangyue Chen</strong>, ${paper.authors.split(", ").slice(1).join(", ")}</p>
        <p class="periodical"><em>ACM International Conference on Information and Knowledge Management <strong>(CIKM)</strong>, 2026.</em></p>
        <p>${linkList(paper.links)}</p>
      </div>
    </article>`;

  app.innerHTML = `
    <div class="wrapper" id="top">
      <header aria-label="Profile">
        <div class="image avatar"><img class="portrait" src="${data.profile.avatar}" alt="Portrait of Jiangyue Chen" /></div>
        <h1>${data.profile.name}</h1>
        <position>${data.profile.role}</position><br />
        <autocolor>${data.profile.affiliation}</autocolor><br />
        <email>${data.profile.email}</email>
        <div class="social-icons" aria-label="Profile links">
          <a href="mailto:${data.profile.email}" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.5 6.5 7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
          </a>
          <a href="${data.profile.cv}" target="_blank" rel="noreferrer" aria-label="CV in Chinese">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.8h8l4 4V21H6z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M14 2.8v4h4M8.8 12h6.4M8.8 15.5h6.4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
          </a>
          <a href="${data.profile.github}" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.2.65-.46v-1.7c-2.65.58-3.21-1.13-3.21-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.46 2.24 1.04 2.78.8.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.98A9.03 9.03 0 0 1 12 7.42c.81 0 1.63.11 2.39.32 1.82-1.24 2.61-.98 2.61-.98.52 1.31.19 2.28.1 2.52.61.67.98 1.52.98 2.56 0 3.67-2.24 4.47-4.36 4.71.34.3.65.9.65 1.82v2.67c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z"/></svg>
          </a>
        </div>
      </header>
      <main id="main-content" tabindex="-1">
        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          ${data.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </section>
        <section aria-labelledby="interests-title">
          <h2 id="interests-title">Research Interests</h2>
          <ul>${data.profile.interests.map((interest) => `<li>${interest}</li>`).join("")}</ul>
        </section>
        <section id="news" aria-labelledby="news-title">
          <h2 id="news-title">News</h2>
          <ul>${data.news.map((item) => `<li><strong>[${item.date}]</strong> ${item.text}</li>`).join("")}</ul>
        </section>
        <section id="publications" aria-labelledby="publications-title">
          <h2 id="publications-title">Publications</h2>
          <div class="publication-list">${data.publications.map(publicationCard).join("")}</div>
        </section>
        <section id="project" aria-labelledby="project-title">
          <h2 id="project-title">Projects</h2>
          <article class="project">
            <h3>${data.project.title}: ${data.project.subtitle}</h3>
            <p>${data.project.summary}</p>
            <ul>${data.project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
            <p><a href="${data.project.repo}" target="_blank" rel="noreferrer">[GitHub]</a></p>
          </article>
        </section>
        <section id="honors" aria-labelledby="honors-title">
          <h2 id="honors-title">Honors and Awards</h2>
          <ul>${data.honors.map((honor) => `<li>${honor}</li>`).join("")}</ul>
        </section>
        <section id="education" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <ul class="education-list">${data.education.map((item) => `<li><img src="${item.logo}" alt="${item.logoAlt}" /><span><strong>${item.period}</strong>, ${item.degree}, ${item.school}, ${item.detail}</span></li>`).join("")}</ul>
        </section>
        <footer>© ${new Date().getFullYear()} Jiangyue Chen</footer>
      </main>
    </div>`;
})();
