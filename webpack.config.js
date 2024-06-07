const path = require("path");

module.exports = {
  entry: "./src/mailprexForm.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "mailprexForm.js",
    libraryTarget: "umd",
    library: "mailprexForm",
    umdNamedDefine: true,
  },
};
