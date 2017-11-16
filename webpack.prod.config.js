/*jshint esversion: 6 */
// In webpack.prod.config.js
// This file contains the configuration needed by Webpack to compile the sources to bundle.js

const webpack = require('webpack');

// The path module provides utilities for working with file
//  and directory paths. It can be accessed using:
// See: https://nodejs.org/docs/latest/api/path.html
const path = require('path');

const Copy = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    // './src/app.js' // this file along with dependency libs will be compiled into one file and loaded
      // See index.html, you will see bundle.js embedded
    //'webpack-hot-middleware/client',
    './src/app'
  ],

  // Production details
  output: {
    // When compiled for production, output file location
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js' // Its convention to use this name
  },

  // Bundle lookup dir for included/imported modules
  // By default, bundler/webpack with search here for the scripts
  resolve: {
    //modulesDirectories: ['node_modules', 'src'],
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel-loader'],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        // Transform our own .css files with PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }, {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'},
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
        }
        // I am using SASS as Transpiler for style sheets
      //{test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //new Copy([
      //{ from: './node_modules/font-awesome/fonts', to: 'fonts' },
      //{ from: './node_modules/font-awesome/css/font-awesome.min.css' },
    //]),
    //new ExtractTextPlugin('style.css')
   /*
    new webpack.DefinePlugin({
      'process.env': {
        // This tells the Webpack and Babel for optimization for performance
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // Makes sure Webpack will not compile if Errors
   */
  ]
};
