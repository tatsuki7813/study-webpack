const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: "./index.js",

  output: {
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: "./assets/js/main.js",
  },
  devtool: "hidden-source-map",
};
