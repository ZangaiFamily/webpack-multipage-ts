const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html')
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: path.resolve(__dirname, '../about.html')
  }),
  new CleanWebpackPlugin()
]

module.exports = plugins;