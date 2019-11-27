const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/hire/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro, image, partners } = data;
  return html`
    <h1>${title}</h1>
    ${md.render(intro)}
    <img src="${image}" width="960" height="540" alt="" />

    <section aria-label="Our partners">
      ${partners.map(Logo).join("")}
    </section>
  `;
};

function Logo(src) {
  return html`
    <img src="${src}" height="64" alt="" />
  `;
}
