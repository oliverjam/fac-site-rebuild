const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../html");

exports.data = {
  permalink: "/about/index.html",
  layout: "layouts/base",
  tags: ["nav"],
  navLabel: "About",
  order: 1,
};

exports.render = data => {
  const { title, intro, faqSection, teamSection } = data;
  return html`
    <h1>${title}</h1>
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />

    <section class="stack5">
      <h2>${faqSection.title}</h2>
      <ul class="grid">
        ${faqSection.faqs.map(Question)}
      </ul>
      ${md.render(faqSection.outro)}
    </section>

    <section class="stack5">
      <h2>${teamSection.title}</h2>
      ${teamSection.team.map(Employee)}
    </section>
  `;
};

function Question({ title, body }) {
  return html`
    <li class="stack">
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function Employee({ name, role, image }) {
  return html`
  <figure>
    <figcaption>
      <h3>${name}</h3>
      <div>${role}</h3>
    </figcaption>
    <img src="${image}" width="499" height="735" alt="">
  </figure>
`;
}
