const Markdown = require("markdown-it");
const md = new Markdown();

const html = require("../../../html");

exports.data = {
  tags: ["nav"],
  navLabel: "About",
  order: 1,
};

exports.render = data => {
  const { title, intro, faqSection, teamSection } = data;
  return html`
    <h1>${title}</h1>
    <div class="intro">
      ${md.render(intro)}
    </div>
    <hr class="divider" />

    <section class="stack5">
      <h2>${faqSection.title}</h2>
      <ul class="grid cycle-colors">
        ${faqSection.faqs.map(Question)}
      </ul>
      ${md.render(faqSection.outro)}
    </section>

    <section class="full-width stripes">
      <div class="reel" style="--gap: var(--space5)" tabindex="0">
        ${teamSection.team.map(Testimonial)}
      </div>
    </section>
  `;
};

function Question({ title, body }) {
  return html`
    <li class="stack top-stripe">
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function Testimonial({ name, role, image, href }) {
  return html`
  <figure class="testimonial">
    <figcaption>
      <h3>${name}</h3>
      <div>${role}</h3>
    </figcaption>
    <a class="image" href="${href}" aria-label="${name}'s LinkedIn profile">
      <img src="${image}" width="499" height="735" alt="">
    </a>
  </figure>
`;
}
