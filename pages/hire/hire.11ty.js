const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../html");

exports.data = {
  permalink: "/hire/index.html",
  layout: "layouts/base",
  tags: ["nav"],
  navLabel: "Hire",
  order: 3,
};

exports.render = data => {
  const { title, intro, image, partners } = data;
  return html`
    <h1>${title}</h1>
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />
    <img src="${image}" width="960" height="540" alt="" />

    <section class="stack">
      <h2>Our Partners</h2>
      <div class="reel">
        ${partners.map(Logo)}
      </div>
    </section>
  `;
};

function Logo(src) {
  return html`
    <img src="${src}" height="48" style="height: 48px" alt="" />
  `;
}
