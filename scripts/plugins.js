const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const path = require("path");

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "../index.html"),
  }),
  new HtmlWebpackPlugin({
    filename: "about.html",
    template: path.resolve(__dirname, "../about.html"),
  }),
  new CleanWebpackPlugin(),
  new TSLintPlugin({
    files: ["./src/**/*.ts"],
  }),
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: ["You application is running here http://localhost:3000"],
      notes: ["Some additionnal notes to be displayed upon successful compilation"],
    },
    onErrors: function(severity, errors) {
      // You can listen to errors transformed and prioritized by the plugin
      // severity can be 'error' or 'warning'
    },
    // should the console be cleared between each compilation?
    // default is true
    clearConsole: true,

    // add formatters and transformers (see below)
    additionalFormatters: [],
    additionalTransformers: [],
  }),
];

module.exports = plugins;
