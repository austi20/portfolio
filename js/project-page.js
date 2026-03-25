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

  function renderQuickFacts(facts) {
    if (!facts || !facts.length) {
      return "";
    }

    return [
      '<div class="fact-grid quick-fact-grid">',
      facts.map(function (fact) {
        return [
          '<article class="fact-card">',
          '  <p class="fact-label">' + escapeHtml(fact.label) + "</p>",
          '  <p class="fact-value">' + escapeHtml(fact.value) + "</p>",
          "</article>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");
  }

  function renderFindingCards(findings) {
    if (!findings || !findings.length) {
      return "";
    }

    return [
      '<ul class="finding-list">',
      findings.map(function (finding) {
        return '<li>' + escapeHtml(finding) + "</li>";
      }).join(""),
      "</ul>"
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

  function renderVisualSections(sections, placement) {
    return (sections || [])
      .filter(function (section) {
        return section.placement === placement;
      })
      .map(function (section) {
        return [
          '<section class="detail-section visual-section">',
          "  <h2>" + escapeHtml(section.title) + "</h2>",
          section.intro
            ? '  <p class="section-copy section-copy-tight">' + escapeHtml(section.intro) + "</p>"
            : "",
          '  <div class="visual-grid">',
          (section.figures || []).map(function (figure) {
            return [
              '    <figure class="visual-card">',
              '      <div class="visual-frame">',
              '        <img class="visual-image" src="' + escapeHtml(figure.src) + '" alt="' + escapeHtml(figure.alt) + '" loading="lazy" decoding="async">',
              "      </div>",
              '      <figcaption class="visual-copy">',
              figure.title ? '        <p class="project-type">' + escapeHtml(figure.title) + "</p>" : "",
              "        <p>" + escapeHtml(figure.caption) + "</p>",
              "      </figcaption>",
              "    </figure>"
            ].join("");
          }).join(""),
          "  </div>",
          "</section>"
        ].join("");
      })
      .join("");
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

  function renderQuickScan(project) {
    if ((!project.quickFacts || !project.quickFacts.length) && (!project.findings || !project.findings.length)) {
      return "";
    }

    return [
      '<section class="detail-section quickscan-section">',
      "  <h2>Quick scan</h2>",
      '  <div class="quickscan-grid">',
      '    <div class="quickscan-panel">',
      '      <p class="project-type">Fast facts</p>',
      renderQuickFacts(project.quickFacts),
      "    </div>",
      '    <div class="quickscan-panel">',
      '      <p class="project-type">' + escapeHtml(project.findingsHeading || "Why it matters") + "</p>",
      renderFindingCards(project.findings),
      "    </div>",
      "  </div>",
      "</section>"
    ].join("");
  }

  function renderSkillMap(section) {
    if (!section || !section.rows || !section.rows.length) {
      return "";
    }

    return [
      '<section class="detail-section skillmap-section">',
      "  <h2>" + escapeHtml(section.title) + "</h2>",
      section.intro
        ? '  <p class="section-copy section-copy-tight">' + escapeHtml(section.intro) + "</p>"
        : "",
      '  <div class="table-wrap">',
      '    <table class="mapping-table">',
      '      <thead>',
      '        <tr>',
      '          <th scope="col">' + escapeHtml(section.columns && section.columns[0] ? section.columns[0] : "Course topic") + "</th>",
      '          <th scope="col">' + escapeHtml(section.columns && section.columns[1] ? section.columns[1] : "Applied relevance") + "</th>",
      "        </tr>",
      "      </thead>",
      "      <tbody>",
      section.rows.map(function (row) {
        return [
          "        <tr>",
          '          <th scope="row">' + escapeHtml(row.topic) + "</th>",
          '          <td>' + escapeHtml(row.relevance) + "</td>",
          "        </tr>"
        ].join("");
      }).join(""),
      "      </tbody>",
      "    </table>",
      "  </div>",
      "</section>"
    ].join("");
  }

  function renderPortfolioConnections(section, projects) {
    if (!section || !section.items || !section.items.length) {
      return "";
    }

    return [
      '<section class="detail-section">',
      "  <h2>" + escapeHtml(section.title) + "</h2>",
      section.intro
        ? '  <p class="section-copy section-copy-tight">' + escapeHtml(section.intro) + "</p>"
        : "",
      '  <div class="connection-grid">',
      section.items.map(function (item) {
        var linkedProject = projects.find(function (project) {
          return project.slug === item.slug;
        });
        var href = linkedProject ? linkedProject.detailPage : "#";
        var title = item.title || (linkedProject ? linkedProject.title : "Related page");

        return [
          '    <article class="connection-card">',
          item.label ? '      <p class="project-type">' + escapeHtml(item.label) + "</p>" : "",
          "      <h3>" + escapeHtml(title) + "</h3>",
          "      <p>" + escapeHtml(item.description) + "</p>",
          linkedProject
            ? '      <a class="project-link" href="' + escapeHtml(href) + '">Open page</a>'
            : "",
          "    </article>"
        ].join("");
      }).join(""),
      "  </div>",
      "</section>"
    ].join("");
  }

  function renderChallengeProof(section) {
    if (!section || !section.items || !section.items.length) {
      return "";
    }

    return [
      '<section class="detail-section">',
      "  <h2>" + escapeHtml(section.title) + "</h2>",
      section.intro
        ? '  <p class="section-copy section-copy-tight">' + escapeHtml(section.intro) + "</p>"
        : "",
      '  <div class="compact-card-grid">',
      section.items.map(function (item) {
        return [
          '    <article class="signal-card compact-signal-card">',
          '      <p class="fact-label">' + escapeHtml(item.label) + "</p>",
          item.value ? '      <p class="signal-value">' + escapeHtml(item.value) + "</p>" : "",
          '      <p>' + escapeHtml(item.description) + "</p>",
          "    </article>"
        ].join("");
      }).join(""),
      "  </div>",
      "</section>"
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

  var isCoursework = project.section === "coursework";
  var portfolioAnchor = isCoursework ? "../index.html#coursework" : "../index.html#projects";
  var defaultPageLabel = isCoursework ? "Course Report" : "Project Case Study";
  var pageLabel = project.pageLabel || defaultPageLabel;
  var defaultSectionLabels = isCoursework
    ? {
        overview: "What I built",
        objective: "What the coursework required",
        dataset: "How the work was evaluated",
        approach: "Key assignments and coding challenges",
        results: "What the work proved",
        insights: "Why this matters in analytics",
        codeHighlights: "Selected coursework highlights",
        repository: "Repository",
        nextSteps: "What I would improve"
      }
    : {
        overview: "Project overview",
        objective: "Business objective",
        dataset: "Dataset",
        approach: "Approach",
        results: "Results",
        insights: "Key insights",
        codeHighlights: "Code highlights",
        repository: "Repository link",
        nextSteps: "Next steps / future improvements"
      };
  var sectionLabels = Object.assign({}, defaultSectionLabels, project.sectionTitles || {});

  // Each HTML page ships with fallback content so this script acts as progressive enhancement rather than the only source of meaning.
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
    renderQuickScan(project),
    renderSkillMap(project.skillMap),
    '<section class="detail-grid">',
    '  <div class="detail-main-stack">',
    renderContentSection(sectionLabels.overview, project.overview),
    renderVisualSections(project.visualSections, "after-overview"),
    renderContentSection(sectionLabels.objective, project.objective),
    renderVisualSections(project.visualSections, "after-objective"),
    renderContentSection(sectionLabels.dataset, project.dataset),
    renderVisualSections(project.visualSections, "after-dataset"),
    renderContentSection(sectionLabels.approach, project.approach),
    renderVisualSections(project.visualSections, "after-approach"),
    renderContentSection(sectionLabels.results, project.results),
    renderVisualSections(project.visualSections, "after-results"),
    renderChallengeProof(project.challengeProof),
    renderContentSection(sectionLabels.insights, project.insights),
    renderVisualSections(project.visualSections, "after-insights"),
    renderPortfolioConnections(project.portfolioConnections, projects),
    '<section class="detail-section">',
    "  <h2>" + escapeHtml(sectionLabels.codeHighlights) + "</h2>",
    '  <p class="section-copy section-copy-tight">' + escapeHtml(
      isCoursework
        ? "These examples are intentionally short. They are included to show the type of implementation work completed in the course without overwhelming the reader with raw repository output."
        : "These examples are intentionally short. They are included to show how the project works without overwhelming the reader with raw notebook or script output."
    ) + "</p>",
    '  <div class="snippet-grid">',
    renderSnippets(project.snippets),
    "  </div>",
    "</section>",
    '<section class="detail-section">',
    "  <h2>" + escapeHtml(sectionLabels.repository) + "</h2>",
    renderParagraphs(project.repository && project.repository.paragraphs),
    '  <a class="button button-primary" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">Open repository</a>',
    "</section>",
    '<section class="detail-section">',
    "  <h2>" + escapeHtml(sectionLabels.nextSteps) + "</h2>",
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
