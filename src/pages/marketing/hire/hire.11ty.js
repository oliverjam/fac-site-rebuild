const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../../html");

exports.data = {
  tags: ["nav"],
  navLabel: "Hire",
  order: 3,
  sticky: {
    text: "Think your company would be a good fit?",
    href: "https://airtable.com/shrLFs9AORwMO93cb",
    cta: "Get in touch",
  },
};

exports.render = data => {
  const { title, intro, image, quotes, partners } = data;
  return html`
    <h1>${title}</h1>
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />
    <img src="${image}" class="circle-reveal" width="960" height="540" alt="" />

    <section class="full-width stripes" aria-label="Our Partners">
      <div class="stack5">
        <div
          class="reel"
          style="--gap: var(--space5); --col: 28rem"
          tabindex="0"
        >
          ${quotes.map(Quote)}
        </div>
        <div class="reel" tabindex="0" style="--col: auto">
          ${partners.map(Logo)}
        </div>
      </div>
    </section>
  `;
};

function Quote({ name, company, body }) {
  return html`
  <figure class="testimonial partner">
    <figcaption>
      <h3>${name}</h3>
      <div>${company}</h3>
    </figcaption>
    <blockquote>${body}</blockquote>
  </figure>
`;
}

function Logo(src) {
  return html`
    <img src="${src}" height="48" style="height: 48px" alt="" />
  `;
}
