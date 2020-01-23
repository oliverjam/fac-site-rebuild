const html = require("../../html");

exports.data = {
  layout: "layouts/base",
};

exports.render = data => {
  return html`
    <main class="stack7">${data.content}</main>
  `;
};
