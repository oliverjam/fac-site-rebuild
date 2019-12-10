const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../html");

exports.data = {
  permalink: "/events/index.html",
  layout: "layouts/base",
  tags: ["nav"],
  navLabel: "Events",
  order: 5,
};

exports.render = data => {
  const { title, intro, schedule } = data;
  console.log(data.collections.events);
  return html`
    <h1>${title}</h1>
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />
    <ul>
      ${schedule.map(Event)}
    </ul>
  `;
};

function Event({ date, type }) {
  return html`
    <li><a href="/events/${type}">${date} ${type}</a></li>
  `;
}
