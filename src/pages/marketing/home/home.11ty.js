const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../../html");

exports.data = {
  permalink: "/",
  tags: ["nav"],
  navLabel: "Home",
  order: 0,
};

exports.render = data => {
  const { title, video, intro, coop, testimonials } = data;
  return html`
    <h1 class="giant-title">${title}</h1>
    <hr class="divider" />
    <div class="circle-reveal">
      <video width="100%" src="${video}" muted autoplay loop></video>
    </div>

    <section class="stack">
      <h2>${intro.title}</h2>
      <div class="intro">
        ${md.render(intro.body)}
      </div>
    </section>

    <section class="stack">
      <h2>${coop.title}</h2>
      <div class="reel" tabindex="0" style="--col: auto">
        ${coop.logos.map(Logo)}${coop.logos.map(Logo)}
      </div>
    </section>

    <section class="full-width stripes">
      <div class="reel" style="--gap: var(--space5)" tabindex="0">
        ${testimonials.map(Testimonial)}
      </div>
    </section>
  `;
};

function Logo(src) {
  return html`
    <img src="${src}" height="48" style="height: 48px" alt="" />
  `;
}

function Testimonial({ name, cohort, image, quote }) {
  return html`
  <figure class="testimonial">
    <figcaption>
      <h3>${name}</h3>
      <div>${cohort}</h3>
    </figcaption>
    <div class="image">
      <img src="${image}" width="499" height="735" alt="">
    </div>
    <blockquote>${quote}</blockquote>
  </figure>
`;
}
