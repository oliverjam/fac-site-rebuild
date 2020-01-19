const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../../html");

exports.data = {
  permalink: "/tech-for-better/",
  tags: ["nav"],
  navLabel: "Tech for Better",
  order: 4,
};

exports.render = data => {
  const { title, intro, image, apply, faqSection, caseStudies, about } = data;
  return html`
    <h1>${title}</h1>
    <section class="stack4">
      <h2>${intro.title}</h2>
      <div class="intro">
        ${md.render(intro.body)}
      </div>
    </section>
    <hr class="divider" />
    <div class="circle-reveal">
      <img src="${image}" width="960" height="540" alt="" />
    </div>

    <section class="stack4">
      <h2>${apply.title}</h2>
      <ol class="grid steps cycle-colors" style="--min-width: 20rem">
        ${apply.steps.map(Step)}
      </ol>
    </section>

    <section class="stack4">
      <h2>${faqSection.title}</h2>
      <ul class="grid cycle-colors">
        ${faqSection.faqs.map(Info)}
      </ul>
    </section>

    <section class="stack4">
      <h2>${caseStudies.title}</h2>
      <ul class="stack">
        ${caseStudies.apps.map(App)}
      </ul>
    </section>

    <section class="stack4">
      <h2>${about.title}</h2>
      ${md.render(about.body)}
    </section>
  `;
};

function Step({ title, body }) {
  return html`
    <li class="stack">
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function Info({ title, body }) {
  return html`
    <li class="stack top-stripe">
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function App({ title, body, url }) {
  return html`
    <li class="stack">
      <h3>${title}</h3>
      ${md.render(body)}
      <a href="${url}">Check it out</a>
    </li>
  `;
}
