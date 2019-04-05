const path = require("path");

const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const cssLoader = {
  test: /\.css$/,
  use: [
    "style-loader",
    "css-loader",
  ],
};

const fileLoader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: "file-loader",
};

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: "file-loader",
};

const tsLintLoader = {
  enforce: "pre",
  test: /\.ts$/,
  loader: "tslint-loader",
  exclude: /(node_modules)/,
  options: {
    typeCheck: true,
    tsConfigFile: path.resolve(__dirname, "../tsconfig.json"),
  },
};

module.exports = {
  rules: [
    tsLoader,
    cssLoader,
    fileLoader,
    fontLoader,
    tsLintLoader,
  ],
};
