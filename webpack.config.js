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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "hidden-source-map",
};
