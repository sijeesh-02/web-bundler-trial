const path = require("path");

module.exports = {
  entry: "./src/ui/index.js",
  // externals to expose script included jQuery lib
  externals: {
    jquery: "jQuery",
  },
  output: {
    path: path.resolve(__dirname, "dist/ui"),
    // use this name in html file
    filename: "bundle.js",
  },
};
