const html = require("../../html");

exports.data = {
  layout: "layouts/base",
};

exports.render = data => {
  return html`
    <h1>${data.title}</h1>
    ${data.content}
  `;
};
