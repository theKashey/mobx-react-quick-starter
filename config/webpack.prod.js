const path = require('path')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: [path.resolve(__dirname, '../main.js')],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].chunk.js',
    publicPath: '/',
  },
  optimization:{
    splitChunks:{
      name: 'vendor',
    },
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['../build/*.*', '../build/*'], {
      root: path.resolve(__dirname, '../build'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template.html'),
      path: path.join(__dirname, '../build'),
      excludeChunks: ['base'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MinifyPlugin(),
  ],
})
