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
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />
    <img src="${image}" width="960" height="540" alt="" />

    <section aria-label="Our partners">
      <div class="cluster" style="--gap: var(--space4)">
        <div>
          ${partners.map(Logo).join("")}
        </div>
      </div>
    </section>
  `;
};

function Logo(src) {
  return html`
    <img src="${src}" height="48" style="height: 48px" alt="" />
  `;
}
