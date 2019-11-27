const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/about/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro, faqSection, teamSection } = data;
  return html`
    <h1>${title}</h1>
    ${md.render(intro)}

    <section>
      <h2>${faqSection.title}</h2>
      <ul>
        ${faqSection.faqs.map(Question).join("")}
      </ul>
      ${md.render(faqSection.outro)}
    </section>

    <section>
      <h2>${teamSection.title}</h2>
      ${teamSection.team.map(Employee).join("")}
    </section>
  `;
};

function Question({ title, body }) {
  return html`
    <li>
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
