const html = require("../../html");

exports.data = {
  layout: "layouts/base",
};

exports.render = data => {
  return html`
    <main class="stack4" style="--page-width: 50rem">
      <h1>${data.title}</h1>
      ${data.content}
    </main>
  `;
};
