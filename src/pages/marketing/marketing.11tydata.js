module.exports = {
  layout: "layouts/marketing",
  permalink: ({ page }) => page.permalink || page.fileSlug + "/",
};
