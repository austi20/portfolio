(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderParagraphs(paragraphs) {
    return (paragraphs || []).map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    }).join("");
  }

  function renderBullets(bullets) {
    if (!bullets || !bullets.length) {
      return "";
    }

    return [
      '<ul class="detail-list">',
      bullets.map(function (bullet) {
        return "<li>" + escapeHtml(bullet) + "</li>";
      }).join(""),
      "</ul>"
    ].join("");
  }

  function renderQuickFacts(facts) {
    return facts.map(function (fact) {
      return [
        '<article class="fact-card">',
        '  <p class="fact-label">' + escapeHtml(fact.label) + "</p>",
        '  <p class="fact-value">' + escapeHtml(fact.value) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderTags(tags) {
    return tags.map(function (tag) {
      return "<li>" + escapeHtml(tag) + "</li>";
    }).join("");
  }

  function renderReadmeSections(sections) {
    return sections.map(function (section) {
      return [
        '<article class="readme-card">',
        "  <h3>" + escapeHtml(section.title) + "</h3>",
        renderParagraphs(section.paragraphs),
        renderBullets(section.bullets),
        "</article>"
      ].join("");
    }).join("");
  }

  function renderSnippets(snippets) {
    return snippets.map(function (snippet) {
      return [
        '<article class="snippet-card">',
        '  <div class="snippet-copy">',
        '    <p class="project-type">' + escapeHtml(snippet.title) + "</p>",
        "    <p>" + escapeHtml(snippet.explanation) + "</p>",
        "  </div>",
        '  <pre><code class="language-' + escapeHtml(snippet.language) + '">' + escapeHtml(snippet.code) + "</code></pre>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderProjectLinks(projects, currentSlug) {
    return projects.map(function (project) {
      var currentClass = project.slug === currentSlug ? " is-current-page" : "";
      return [
        '<li class="project-nav-item' + currentClass + '">',
        '  <a href="' + escapeHtml(project.detailPage) + '">' + escapeHtml(project.title) + "</a>",
        "</li>"
      ].join("");
    }).join("");
  }

  function renderRelatedProjects(projects, currentSlug) {
    return projects
      .filter(function (project) {
        return project.slug !== currentSlug;
      })
      .slice(0, 3)
      .map(function (project) {
        return [
          '<article class="related-card">',
          '  <p class="project-type">' + escapeHtml(project.cardType) + "</p>",
          "  <h3>" + escapeHtml(project.title) + "</h3>",
          "  <p>" + escapeHtml(project.plainOverview) + "</p>",
          '  <div class="project-actions">',
          '    <a class="button button-secondary button-small" href="' + escapeHtml(project.detailPage) + '">Open page</a>',
          '    <a class="project-link" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
          "  </div>",
          "</article>"
        ].join("");
      }).join("");
  }

  var slug = document.body.getAttribute("data-project-slug");
  var projects = window.portfolioProjects || [];
  var project = projects.find(function (entry) {
    return entry.slug === slug;
  });
  var mount = document.getElementById("project-page");

  if (!mount) {
    return;
  }

  if (!project) {
    mount.innerHTML = [
      '<section class="contact-card">',
      "  <h1>Project not found</h1>",
      "  <p>The requested project page could not be loaded.</p>",
      '  <a class="button button-primary" href="../index.html#projects">Back to portfolio</a>',
      "</section>"
    ].join("");
    return;
  }

  document.title = project.title + " | Gunnar Austin";
  var portfolioAnchor = project.section === "coursework" ? "../index.html#coursework" : "../index.html#projects";
  var pageLabel = project.section === "coursework" ? "Coursework Detail Page" : "Project Detail Page";

  mount.innerHTML = [
    '<section class="detail-hero">',
    '  <div class="detail-hero-copy">',
    '    <p class="eyebrow">' + escapeHtml(pageLabel) + "</p>",
    "    <h1>" + escapeHtml(project.title) + "</h1>",
    '    <p class="hero-text">' + escapeHtml(project.plainOverview) + "</p>",
    '    <div class="hero-actions">',
    '      <a class="button button-primary" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
    '      <a class="button button-secondary" href="' + escapeHtml(portfolioAnchor) + '">Back to portfolio</a>',
    "    </div>",
    "  </div>",
    '  <aside class="detail-hero-card">',
    '    <p class="profile-kicker">Quick facts</p>',
    '    <div class="fact-grid">',
    renderQuickFacts(project.quickFacts),
    "    </div>",
    '    <div class="detail-tech-stack">',
    '      <p class="project-type">Tools used</p>',
    '      <ul class="tag-list" aria-label="Technologies">',
    renderTags(project.technologies),
    "      </ul>",
    "    </div>",
    "  </aside>",
    "</section>",
    '<section class="detail-grid">',
    '  <div class="detail-main-stack">',
    '    <section class="detail-section">',
    "      <h2>Plain-language overview</h2>",
    "      <p>This page is written to explain the project without assuming the reader is familiar with GitHub, repository layouts, or notebook files.</p>",
    renderParagraphs([
      "The project link above still points to the original repository, but the summary here highlights the main idea, the most important results, and the parts of the README that matter most to a recruiter or non-technical reviewer."
    ]),
    "    </section>",
    '    <section class="detail-section">',
    "      <h2>" + escapeHtml(project.findingsHeading) + "</h2>",
    renderBullets(project.findings),
    "    </section>",
    '    <section class="detail-section">',
    "      <h2>Important README content</h2>",
    '      <div class="readme-grid">',
    renderReadmeSections(project.readmeSections),
    "      </div>",
    "    </section>",
    '    <section class="detail-section">',
    "      <h2>Code snippets that explain the project</h2>",
    '      <p class="section-copy section-copy-tight">These are short excerpts chosen to show how the project works without requiring the viewer to read an entire notebook or script.</p>',
    '      <div class="snippet-grid">',
    renderSnippets(project.snippets),
    "      </div>",
    "    </section>",
    "  </div>",
    '  <aside class="sidebar-stack">',
    '    <section class="sidebar-panel">',
    '      <p class="project-type">Repository access</p>',
    "      <h3>Open the full source</h3>",
    "      <p>The GitHub repository remains available for anyone who wants the original files, notebooks, SQL script, or assignment materials.</p>",
    '      <a class="button button-primary button-full" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">Open repository</a>',
    "    </section>",
    '    <section class="sidebar-panel">',
    '      <p class="project-type">Project navigation</p>',
    "      <h3>Browse other work</h3>",
    '      <ul class="project-nav-list">',
    renderProjectLinks(projects, project.slug),
    "      </ul>",
    "    </section>",
    "  </aside>",
    "</section>",
    '<section class="detail-section related-section">',
    "  <h2>Other project pages</h2>",
    '  <div class="related-grid">',
    renderRelatedProjects(projects, project.slug),
    "  </div>",
    "</section>"
  ].join("");
})();
