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

  function renderAtAGlance(cards) {
    return (cards || []).map(function (card) {
      return [
        '<article class="fact-card">',
        '  <p class="fact-label">' + escapeHtml(card.label) + "</p>",
        '  <p class="fact-value">' + escapeHtml(card.value) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderSteps(steps) {
    if (!steps || !steps.length) {
      return "";
    }

    return [
      '<div class="step-grid">',
      steps.map(function (step, index) {
        return [
          '<article class="step-card">',
          '  <span class="step-index">0' + (index + 1) + "</span>",
          "  <h3>" + escapeHtml(step.title) + "</h3>",
          "  <p>" + escapeHtml(step.description) + "</p>",
          "</article>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");
  }

  function renderResultHighlights(highlights) {
    if (!highlights || !highlights.length) {
      return "";
    }

    return [
      '<div class="signal-grid">',
      highlights.map(function (highlight) {
        return [
          '<article class="signal-card">',
          '  <p class="fact-label">' + escapeHtml(highlight.label) + "</p>",
          '  <p class="signal-value">' + escapeHtml(highlight.value) + "</p>",
          "  <p>" + escapeHtml(highlight.description) + "</p>",
          "</article>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");
  }

  function renderSnippets(snippets) {
    return (snippets || []).map(function (snippet) {
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
          '  <p class="related-copy">' + escapeHtml(project.heroSummary || project.plainOverview) + "</p>",
          '  <div class="project-actions">',
          '    <a class="button button-secondary button-small" href="' + escapeHtml(project.detailPage) + '">Open page</a>',
          '    <a class="project-link" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
          "  </div>",
          "</article>"
        ].join("");
      }).join("");
  }

  function renderContentSection(title, content, extraClass) {
    if (!content) {
      return "";
    }

    return [
      '<section class="detail-section' + (extraClass ? " " + extraClass : "") + '">',
      "  <h2>" + escapeHtml(title) + "</h2>",
      renderParagraphs(content.paragraphs),
      renderBullets(content.bullets),
      renderSteps(content.steps),
      renderResultHighlights(content.highlights),
      "  </section>"
    ].join("");
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
  var pageLabel = project.section === "coursework" ? "Coursework Case Study" : "Project Case Study";

  mount.innerHTML = [
    '<section class="detail-hero detail-hero-polished">',
    '  <div class="detail-hero-copy">',
    '    <p class="eyebrow">' + escapeHtml(pageLabel) + "</p>",
    "    <h1>" + escapeHtml(project.title) + "</h1>",
    '    <p class="detail-deck">' + escapeHtml(project.heroSummary || project.plainOverview) + "</p>",
    '    <div class="summary-callout">',
    '      <p class="project-type">Executive summary</p>',
    "      <p>" + escapeHtml(project.executiveSummary || project.plainOverview) + "</p>",
    "    </div>",
    '    <div class="hero-actions">',
    '      <a class="button button-primary" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
    '      <a class="button button-secondary" href="' + escapeHtml(portfolioAnchor) + '">Back to portfolio</a>',
    "    </div>",
    "  </div>",
    '  <aside class="detail-hero-card">',
    '    <p class="profile-kicker">At a glance</p>',
    '    <div class="fact-grid">',
    renderAtAGlance(project.atAGlance),
    "    </div>",
    "  </aside>",
    "</section>",
    '<section class="detail-grid">',
    '  <div class="detail-main-stack">',
    renderContentSection("Project overview", project.overview),
    renderContentSection("Business objective", project.objective),
    renderContentSection("Dataset", project.dataset),
    renderContentSection("Approach", project.approach),
    renderContentSection("Results", project.results),
    renderContentSection("Key insights", project.insights),
    '<section class="detail-section">',
    "  <h2>Code highlights</h2>",
    '  <p class="section-copy section-copy-tight">These examples are intentionally short. They are included to show how the project works without overwhelming the reader with raw notebook or script output.</p>',
    '  <div class="snippet-grid">',
    renderSnippets(project.snippets),
    "  </div>",
    "</section>",
    '<section class="detail-section">',
    "  <h2>Repository link</h2>",
    renderParagraphs(project.repository && project.repository.paragraphs),
    '  <a class="button button-primary" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">Open repository</a>',
    "</section>",
    '<section class="detail-section">',
    "  <h2>Next steps / future improvements</h2>",
    renderParagraphs(project.nextSteps && project.nextSteps.paragraphs),
    renderBullets(project.nextSteps && project.nextSteps.bullets),
    "</section>",
    "  </div>",
    "</section>",
    '<section class="detail-section related-section">',
    "  <h2>Other project pages</h2>",
    '  <div class="related-grid">',
    renderRelatedProjects(projects, project.slug),
    "  </div>",
    "</section>"
  ].join("");
})();
