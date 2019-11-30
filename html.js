// Usage: html`<h1>Hello world</h1>`
// The name "html" gives syntax highlighting by default in some editors
//
// Works exactly like raw template strings (`<h1>Hello world</h1>`) with 2 enhancements:
// 1. Filters out falsy values (except 0)
//    prevents "<span>undefined</span>" appearing in output
// 2. Joins arrays into strings for you so you can use .map to loop
//
// Tagged template literal functions get passed:
// an array of all the strings, split at each interpolation,
// then all the interpolations as separate arguments
// (we use the rest operator to gather them into an array)
// we need to handle the interpolations then stitch back together
// e.g. html`hello ${2 + 2} world` is equivalent to:
// html(["hello ", " world"], 4)
// we loop through the strings, stopping to add the interpolation at each index

function html(strings, ...interpolations) {
  return strings
    .map((string, i) => {
      let value = interpolations[i];
      // 0 is falsy but a valid value
      if (value === undefined || value === null || value === false) {
        value = "";
      }
      // join arrays so they aren't stringified with commas
      if (Array.isArray(value)) {
        value = value.join("");
      }
      return string + value;
    })
    .join("");
}

module.exports = html;
