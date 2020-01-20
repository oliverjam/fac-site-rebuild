module.exports = config => {
  // Netlify CMS expects to be served from /admin
  config.addPassthroughCopy({ "src/pages/cms": "/admin" });
  // deploy everything in assets untouched
  config.addPassthroughCopy("src/assets");

  // needed to merge tags from specific files with directory-level data
  config.setDataDeepMerge(true);

  // lets us show Stories excerpts
  // use "---" to separate excerpt at beginning
  config.setFrontMatterParsingOptions({
    excerpt: true,
  });

  return {
    dir: {
      // configure Eleventy to look in src/ for everything
      input: "src",
    },
  };
};
