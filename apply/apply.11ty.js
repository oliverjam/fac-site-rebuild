const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/apply/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro } = data;
  return html`
    <h1>${title}</h1>
    ${md.render(intro)}
  `;
};
