(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderTags(tags) {
    return tags.map(function (tag) {
      return "<li>" + escapeHtml(tag) + "</li>";
    }).join("");
  }

  function renderProjectCard(project) {
    return [
      '<article class="project-card">',
      '  <div class="project-art ' + escapeHtml(project.artClass) + '" aria-hidden="true">',
      "    <span>" + escapeHtml(project.badge) + "</span>",
      "  </div>",
      '  <div class="project-body">',
      '    <p class="project-type">' + escapeHtml(project.cardType) + "</p>",
      "    <h3>" + escapeHtml(project.title) + "</h3>",
      '    <p class="project-summary">' + escapeHtml(project.landingSummary) + "</p>",
      '    <ul class="tag-list" aria-label="Technologies">',
      renderTags(project.technologies),
      "    </ul>",
      '    <div class="project-actions">',
      '      <a class="button button-primary button-small" href="projects/' + escapeHtml(project.detailPage) + '">Open case study</a>',
      '      <a class="project-link" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
      "    </div>",
      "  </div>",
      "</article>"
    ].join("");
  }

  function renderCourseworkCard(project) {
    return [
      '<p class="coursework-type">' + escapeHtml(project.cardType) + "</p>",
      "<h3>" + escapeHtml(project.title) + "</h3>",
      '<p class="project-summary">' + escapeHtml(project.landingSummary) + "</p>",
      '      <ul class="tag-list" aria-label="Technologies">',
      renderTags(project.technologies),
      "      </ul>",
      '      <div class="project-actions">',
      '        <a class="button button-primary button-small" href="projects/' + escapeHtml(project.detailPage) + '">Open coursework page</a>',
      '        <a class="project-link" href="' + escapeHtml(project.repoUrl) + '" target="_blank" rel="noreferrer">View repository</a>',
      "      </div>"
    ].join("");
  }

  var projects = window.portfolioProjects || [];
  var personalProjects = projects.filter(function (project) {
    return project.section === "projects";
  });
  var courseworkProject = projects.find(function (project) {
    return project.section === "coursework";
  });

  var projectGrid = document.getElementById("project-grid");
  if (projectGrid) {
    projectGrid.innerHTML = personalProjects.map(renderProjectCard).join("");
  }

  var courseworkCard = document.getElementById("coursework-detail-card");
  if (courseworkCard && courseworkProject) {
    courseworkCard.innerHTML = renderCourseworkCard(courseworkProject);
  }
})();
