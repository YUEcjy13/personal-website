(function () {
  const data = window.siteContent;
  const app = document.querySelector("#app");

  const link = (item) => `<a href="${item.href}"${item.external ? ' target="_blank" rel="noopener"' : ""}>[${item.label}]</a>`;
  const cvItem = (item) => `
    <li class="cv-item">
      <div class="cv-logo"><img src="${item.logo}" alt="${item.logoAlt}" loading="lazy" /></div>
      <div class="cv-body">
        <div class="cv-row">
          <span class="cv-institution">${item.institution}</span>
          <span class="cv-date">${item.date}</span>
        </div>
        <div class="cv-role">${item.role}</div>
        ${item.detail ? `<div class="cv-detail">${item.detail}</div>` : ""}
      </div>
    </li>`;

  const renderPublication = (paper) => `
    <article class="publication-card">
      <div class="pub-image-cell"><img src="${paper.image}" alt="${paper.imageAlt}" loading="lazy" /></div>
      <div class="pub-text-cell">
        <div class="publication-title"><a href="${paper.links[0].href}" target="_blank" rel="noopener">${paper.title}</a></div>
        <div class="publication-authors">${paper.authors}</div>
        <div class="publication-meta">
          <span class="publication-venue${paper.highlighted ? " highlighted" : ""}">${paper.venue}</span>
          <span class="meta-sep">·</span>
          <span class="publication-links">${paper.links.map(link).join(" ")}</span>
        </div>
        <span class="pub-badge">${paper.presentation}</span>
      </div>
    </article>`;

  const years = [...new Set(data.publications.map((paper) => paper.year))].sort((a, b) => b - a);
  const topics = [...new Set(data.publications.flatMap((paper) => paper.topics))];

  app.innerHTML = `
    <nav class="top-navbar" aria-label="Primary navigation">
      <div class="container">
        <div class="navbar-left"><a class="navbar-title" href="#home">${data.profile.name}</a></div>
        <div class="navbar-right">
          <a href="#home">Home</a><a href="#news">News</a><a href="#publications">Publications</a><a href="#education">Education</a><a href="#experience">Experience</a><a href="#honors">Honors</a><a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
    <main class="page-container" id="main-content">
      <section class="profile" id="home" aria-labelledby="profile-name">
        <div class="profile-info">
          <h1 id="profile-name">${data.profile.name} (陈江悦)</h1>
          <p>${data.about.join("</p><p>")}</p>
          <p class="profile-links"><a href="mailto:${data.profile.email}">Email</a> <span>/</span><a href="${data.profile.github}" target="_blank" rel="noopener">GitHub</a> <span>/</span><a href="${data.profile.openreview}" target="_blank" rel="noopener">OpenReview</a> <span>/</span><a href="${data.profile.cv}" target="_blank" rel="noopener">CV (Chinese)</a></p>
        </div>
        <div class="profile-photo"><div class="photo-wrap"><img src="${data.profile.avatar}" alt="Portrait of ${data.profile.name}" /></div></div>
      </section>

      <section id="news" aria-labelledby="news-heading"><h2 id="news-heading">News</h2><ul class="news-list">${data.news.map((item) => `<li><strong>[${item.date}]</strong> ${item.text}</li>`).join("")}</ul></section>

      <section id="publications" aria-labelledby="publications-heading">
        <h2 id="publications-heading">Publications</h2>
        <div class="pub-switch-row" aria-label="Publication view"><button class="pub-switch active" id="show-selected" type="button">Show selected</button> / <button class="pub-switch" id="show-date" type="button">Show by date</button> / <button class="pub-switch" id="show-topic" type="button">Show by topic</button></div>
        <p class="pub-index"><strong>Year:</strong> ${years.join(" / ")}</p>
        <p class="pub-index"><strong>Research Topics:</strong> ${topics.join(" / ")}</p>
        <div id="publications-list"></div>
      </section>

      <section id="education" aria-labelledby="education-heading"><h2 id="education-heading">Education</h2><ul class="cv-list">${data.education.map(cvItem).join("")}</ul></section>
      <section id="experience" aria-labelledby="experience-heading"><h2 id="experience-heading">Experience</h2><ul class="cv-list">${data.experience.map(cvItem).join("")}</ul></section>
      <section id="honors" aria-labelledby="honors-heading"><h2 id="honors-heading">Honors and Awards</h2><ul class="honors-list">${data.honors.map((honor) => `<li>${honor}</li>`).join("")}</ul></section>
      <section id="contact" aria-labelledby="contact-heading"><h2 id="contact-heading">Contact</h2><p>Reach me at <a href="mailto:${data.profile.email}">${data.profile.email}</a>.</p></section>
      <footer>© 2026 Jiangyue Chen · Nanjing. Last updated: <span id="last-updated"></span></footer>
    </main>`;

  const publicationList = document.querySelector("#publications-list");
  const selectedButton = document.querySelector("#show-selected");
  const dateButton = document.querySelector("#show-date");
  const topicButton = document.querySelector("#show-topic");
  const activate = (button) => [selectedButton, dateButton, topicButton].forEach((item) => item.classList.toggle("active", item === button));
  const showSelected = () => { activate(selectedButton); publicationList.innerHTML = data.publications.filter((paper) => paper.selected).map(renderPublication).join(""); };
  const showByDate = () => { activate(dateButton); publicationList.innerHTML = years.map((year) => `<h3 class="pub-sticky-header">${year}</h3>${data.publications.filter((paper) => paper.year === year).map(renderPublication).join("")}`).join(""); };
  const showByTopic = () => { activate(topicButton); publicationList.innerHTML = topics.map((topic) => `<h3 class="pub-sticky-header">${topic}</h3>${data.publications.filter((paper) => paper.topics.includes(topic)).map(renderPublication).join("")}`).join(""); };
  selectedButton.addEventListener("click", showSelected);
  dateButton.addEventListener("click", showByDate);
  topicButton.addEventListener("click", showByTopic);
  document.querySelector("#last-updated").textContent = new Date().toISOString().slice(0, 10);
  showSelected();
})();
