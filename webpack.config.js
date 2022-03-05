const path = require("path");

const MODE = "development";
const sourceMapStatus = MODE === "development";

module.exports = {
  mode: MODE,
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: "./assets/js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: sourceMapStatus } },
        ],
      },
    ],
  },
  devtool: "hidden-source-map",
};
