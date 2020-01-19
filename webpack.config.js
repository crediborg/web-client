const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');

const PROD = process.env.NODE_ENV === 'production';

let plugins = [];

PROD ? [
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  ] : '';

module.exports = {
  mode: PROD ? 'production' : 'development',
  entry: path.resolve(__dirname, config.main),
  devtool: 'source-map',
  output: {
    library: 'CrediBorg',
    libraryTarget: 'window',
    path: __dirname,
    filename: (PROD) ? 'build/crediborg.min.js' : 'build/crediborg.js'
  },
  module: {
    rules: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: plugins
};