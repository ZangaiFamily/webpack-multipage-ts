const path = require("path");
// const assets = require('./assets');
const loaders = require("./loaders");
const plugins = require("./plugins");

const env = process.env.NODE_ENV;

const mode = env === "development" ? "development" : "production";

module.exports = {
  mode,
  entry: {
    index: "./src/index.ts",
  },
  devtool: "inline-source-map",
  module: loaders,
  plugins,
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    // color: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    hot: true,
    contentBase: path.join(__dirname, "../src"),
    compress: true,
    progress: true,
      //quiet: true,
    open: true,
    // openPage: 'main.html',
    // port: 9000,
    // public: 'localhost:8080/main.html'
    // open: true
  },
};
