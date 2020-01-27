const html = require("./html");
exports.data = {
  layout: "layouts/marketing",
  pagination: {
    data: "collections.nav",
    alias: "currentPage",
    size: 1,
  },
  // permalink: data => `/${data.currentPage.url}/og/index.html`,
  permalink: false,
};

exports.render = data => {
  return html`
    <style>
      nav,
      .site-footer {
        display: none;
      }
      body {
        grid-template-rows: 1fr;
      }
      .site-header {
        position: absolute;
        top: 0;
        left: 0;
      }
      .site-logo {
        width: 230px;
      }
      .site-logo text {
        font-size: 40px !important;
      }
      main {
        display: grid;
        place-items: center;
        max-width: 98rem;
      }
      .giant-title {
        font-size: 16rem;
      }
    </style>
    <div style="margin: 0;">
      <h1 class="giant-title">${data.currentPage.data.title}</h1>
    </div>
  `;
};
