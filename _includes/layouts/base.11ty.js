const html = String.raw;

module.exports = data => {
  const pages = [...data.collections.nav]
    .sort((a, b) => a.data.order - b.data.order)
    .map(n => ({ label: n.data.navLabel, url: n.url, title: n.data.title }));

  const nextPage = pages[(data.order + 1) % pages.length];
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        ${Header({ pages, currentUrl: data.page.url })}
        <main class="stack5">
          ${data.content}
        </main>
        ${Footer({ nextPage, site: data.site })}
      </body>
      <script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      ></script>
      <script>
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      </script>
    </html>
  `;
};

function Header({ pages, currentUrl }) {
  // home page shouldn't appear in nav
  const navPages = pages.filter(p => p.url !== "/");
  return html`
    <header class="site-header">
      <a href="/" aria-label="Home page">
        ${Logo()}
      </a>
      <nav>
        <ul style="--cols: ${navPages.length}">
          ${navPages.map(NavItem(currentUrl)).join("")}
        </ul>
      </nav>
    </header>
  `;
}

function NavItem(currentUrl) {
  return ({ url, label }) => {
    const current = currentUrl === url ? "page" : "false";
    return html`
      <li>
        <a href="${url}" aria-current="${current}">${label}</a>
      </li>
    `;
  };
}

function Footer({ nextPage, site }) {
  const nextPageLabel =
    nextPage.url === "/" ? "Back to home page" : nextPage.title;
  return html`
    <footer class="site-footer">
      <div>
        <div class="next-page">
          <h2>Next</h2>
          <a href="${nextPage.url}" rel="next">${nextPageLabel}</a>
        </div>
        <div class="site-info stack2">
          <div class="contact">
            <span>${site.email}</span>
            <span class="contact-divider">|</span>
            <address>${site.address}</address>
          </div>
          <div class="copyright">
            © ${new Date().getFullYear()} Founders and Coders. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  `;
}

function Logo() {
  return html`
    <div>
      <svg
        viewBox="-1 0 301 141"
        fill="none"
        width="140"
        stroke-width="1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="5"
            height="5"
          >
            <path
              d="M-1,1 l2,-2 M0,5 l5,-5 M4,6 l2,-2"
              stroke="black"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <g id="square">
          <rect width="100" height="100" stroke="black" />
          <rect width="100" height="50" fill="black" />
          <rect
            width="50"
            height="50"
            x="50"
            y="50"
            fill="url(#diagonalHatch)"
          />
        </g>

        <g id="triangle" transform="translate(8, 0)">
          <polygon points="100,100 150,0 200, 100" stroke="black" />
          <polygon points="100,100 125,50 150,100" fill="black" />
          <polygon points="150, 100 175,50, 200,100" fill="black" />
          <polygon points="125,50 150,100 175,50" fill="url(#diagonalHatch)" />
        </g>

        <g id="circle">
          <ellipse cx="250" cy="50" rx="50" ry="50" stroke="black" />
          <ellipse
            cx="250"
            cy="50"
            rx="22"
            ry="22"
            fill="url(#diagonalHatch)"
          />
          <path d="M250,0 a1,1 0 0,1 0,100" fill="black" />
        </g>
        <text
          x="0"
          y="128"
          text-length="301"
          length-adjust="spacingAndGlyphs"
          stroke="none"
          fill="black"
          style="font-size: 24px; text-transform: uppercase;"
        >
          Founders and coders
        </text>
      </svg>
    </div>
  `;
}
