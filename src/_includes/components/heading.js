const slugify = require("@sindresorhus/slugify");
const html = require("../../html");

function Heading({ tag = "h2", children, id, ...rest }) {
  const props = Object.entries(rest).reduce(
    (final, [key, val]) => `${final}${key}="${val}" `,
    ""
  );
  const slugId = id || slugify(children);
  return html`
    <${tag} id="${slugId}" ${props}>
      ${children}
      <a href="#${slugId}" class="heading-anchor" aria-label="Link to heading">
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"></path></svg>
        </a>
    </${tag}>
  `;
}

module.exports = Heading;
