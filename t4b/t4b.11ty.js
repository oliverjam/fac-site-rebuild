const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/tech-for-better/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro, image, apply, faqSection, caseStudies, about } = data;
  return html`
    <h1>${title}</h1>
    <section>
      <h2>${intro.title}</h2>
      ${md.render(intro.body)}
    </section>
    <img src="${image}" width="960" height="540" alt="" />

    <section>
      <h2>${apply.title}</h2>
      <ol>
        ${apply.steps.map(Step).join("")}
      </ol>
    </section>

    <section>
      <h2>${faqSection.title}</h2>
      <ul>
        ${faqSection.faqs.map(Step).join("")}
      </ul>
    </section>

    <section>
      <h2>${caseStudies.title}</h2>
      <ul>
        ${caseStudies.apps.map(App).join("")}
      </ul>
    </section>

    <section>
      <h2>${about.title}</h2>
      ${md.render(about.body)}
    </section>
  `;
};

function Step({ title, body }) {
  return html`
    <li>
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function App({ title, body, url }) {
  return html`
    <li>
      <h3>${title}</h3>
      ${md.render(body)}
      <a href="${url}">Check it out</a>
    </li>
  `;
}
