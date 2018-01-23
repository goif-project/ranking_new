const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const appDir = path.resolve(__dirname, 'src')
const buildDir = path.resolve(__dirname, 'dist')

module.exports = {
  context: appDir,

  entry: {
    bundle: './js/app.js',
  },
  output: {
    path: buildDir,
    publicPath: '/',
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
  			test: /\.styl$/,
        loader: ['style-loader','css-loader','stylus-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      title: 'INDEX',
      template: './pug/index.pug'
    }),
    new htmlWebpackPlugin({
      title: 'RANK',
      filename: 'rank.html',
      template: './pug/rank.pug'
    }),
    /*
    new htmlWebpackPlugin({
      title: 'AWAKE - Hello',
      filename: 'hello.html',
      template: 'hello.pug'
    }),
    new htmlWebpackPlugin({
      title: 'AWAKE - World',
      filename: 'world.html',
      template: 'world.pug'
    })
    */
  ],

  devtool: 'source-map',
  devServer: {
    contentBase: 'ms/',
    port: 3000,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: "info",
    stats: { colors: true }
  }
};
