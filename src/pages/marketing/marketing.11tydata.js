module.exports = {
  layout: "layouts/marketing",
  // each pages URL should either be the page-specific override (from the exports.data)
  // or just the folder name (e.g. apply/)
  permalink: ({ page }) => page.permalink || page.fileSlug + "/",
};
