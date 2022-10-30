const path = require('path');
const webpack = require('webpack')
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  }
};
