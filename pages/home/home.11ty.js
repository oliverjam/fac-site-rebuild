const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, video, intro, coop, testimonials } = data;
  return html`
    <h1>${title}</h1>
    <hr class="divider" />
    <video width="100%" src="${video}" muted autoplay loop></video>

    <section class="stack">
      <h2>${intro.title}</h2>
      <div class="intro">
        ${md.render(intro.body)}
      </div>
    </section>

    <section class="stack">
      <h2>${coop.title}</h2>
      <div class="cluster">
        <div>
          ${coop.logos.map(Logo).join("")}
        </div>
      </div>
    </section>

    ${testimonials.map(Testimonial).join("")}
  `;
};

function Logo(src) {
  return html`
    <img src="${src}" height="48" style="height: 48px" alt="" />
  `;
}

function Testimonial({ name, cohort, image, quote }) {
  return html`
  <figure>
    <figcaption>
      <h3>${name}</h3>
      <div>${cohort}</h3>
    </figcaption>
    <img src="${image}" width="499" height="735" alt="">
    <div>${quote}</div>
  </figure>
`;
}
