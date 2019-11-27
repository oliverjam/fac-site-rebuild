const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/",
  layout: "layouts/base",
};

exports.render = data => {
  console.log(data);
  return html`
    <h1>${data.title}</h1>
    <video width="100%" src="${data.video}" muted autoplay loop></video>
    <p>${md.render(data.body)}</p>
  `;
};
