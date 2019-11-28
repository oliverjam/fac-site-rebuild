const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

// location of the postcss entrypoint file
const inputPath = "../_includes/postcss/styles.css";

exports.data = () => {
  const filePath = path.join(__dirname, inputPath);
  return {
    // tell 11ty to write the compiled css to assets/ so we can use
    permalink: `assets/css/styles.css`,
    filePath,
    // read the postcss input string from the _includes directory
    rawCss: fs.readFileSync(filePath),
  };
};

exports.render = async ({ rawCss, filePath }) => {
  const plugins = [
    // stage 1 allows nesting :tada:
    postcssPresetEnv({ stage: 1 }),
    // only minify in prod
    process.env.ELEVENTY_ENV === "production" && cssnano,
  ].filter(Boolean);

  return postcss(plugins)
    .process(rawCss, { from: filePath })
    .then(result => result.css);
};
