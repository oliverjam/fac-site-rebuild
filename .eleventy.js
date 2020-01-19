module.exports = config => {
  // Netlify CMS expects to be served from /admin
  config.addPassthroughCopy({ "src/pages/cms": "/admin" });
  // deploy everything in assets untouched
  config.addPassthroughCopy("src/assets");

  return {
    dir: {
      // configure Eleventy to look in src/ for everything
      input: "src",
    },
  };
};
