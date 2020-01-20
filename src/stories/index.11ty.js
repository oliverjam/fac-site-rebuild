const html = require("../html");

exports.data = {
  layout: "layouts/marketing",
};

exports.render = data => {
  const byUs = data.collections["by-us"];
  const aboutUs = data.collections["about-us"];
  const press = data.collections.press;

  return html`
    <h1>Stories by and about us</h1>
    <p class="intro">
      Curious to learn more about us? Here you’ll find stories by and about our
      diverse community of founders and coders making a social impact with
      technology all over the world.
    </p>

    <section class="stack">
      <h2>Stories by us</h2>
      <div class="reel stripes">
        ${byUs.map(Story)}
      </div>
    </section>

    <section class="stack">
      <h2>Stories by us</h2>
      <div class="reel stripes">
        ${aboutUs.map(Story)}
      </div>
    </section>

    <section class="stack">
      <h2>Stories by us</h2>
      <div class="reel stripes">
        ${press.map(Story)}
      </div>
    </section>
  `;
};

function Story({ data: { title, image, url, page, author, date } }) {
  return html`
    <div class="card">
      <div class="image">
        ${image &&
          html`
            <img src="${image}" alt="" width="400" height="225" />
          `}
      </div>
      <div class="stack2 body">
        <h3>
          ${url
            ? html`
                <a href="${url}">${title}</a>
              `
            : title}
        </h3>
        ${page.excerpt &&
          html`
            <p>${page.excerpt}</p>
          `}
        <footer>
          <span>${author}</span>
          ${author &&
            date &&
            html`
              <span aria-hidden="true" class="dot">⦁</span>
            `}
          <time>${date}</time>
        </footer>
      </div>
    </div>
  `;
}
