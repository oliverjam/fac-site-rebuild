const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/apply/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro, cohortSection, apply } = data;
  return html`
    <h1>${title}</h1>
    ${md.render(intro)}

    <section>
      <h2>${cohortSection.title}</h2>
      <ul>
        ${cohortSection.cohorts.map(Cohort).join("")}
      </ul>
    </section>

    <section>
      <h2>${apply.title}</h2>
      <ol>
        ${apply.steps.map(Step).join("")}
      </ol>
    </section>
  `;
};

function Cohort(c) {
  return html`
    <li>
      <h3>Cohort of ${c.name}</h3>
      ${c.dates
        .map(
          d => html`
            <h4>${d.title}</h4>
            <time datetime="${d.open}">${formatDate(d.open)}</time>
            -
            <time datetime="${d.close}">${formatDate(d.close)}</time>
          `
        )
        .join("")}
    </li>
  `;
}

function formatDate(d) {
  const date = new Date(d);
  // undefined locale should use user's browser language
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Step(s) {
  return html`
    <li>
      <h3>${s.title}</h3>
      ${md.render(s.body)}
    </li>
  `;
}
