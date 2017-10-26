/*jshint esversion: 6 */
// In webpack.prod.config.js
// This file contains the configuration needed by Webpack to compile the sources to bundle.js

const webpack = require('webpack');

// The path module provides utilities for working with file
//  and directory paths. It can be accessed using:
// See: https://nodejs.org/docs/latest/api/path.html
const path = require('path');

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
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.css$/,
        loaders: ['style-loader', {
     loader: 'css-loader',
     options: {
       modules: true,
     },
   }],
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'},
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=[name].[ext]'
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
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
