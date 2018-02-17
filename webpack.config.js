var path = require('path');
var SOURCE_DIR = path.join(__dirname, './src');
var DISTRIBUTION = path.join(__dirname, './distribution')

console.log(SOURCE_DIR)

module.exports = {
  entry: `${SOURCE_DIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: DISTRIBUTION
  },
  module :{
    loaders : [
      {
        test: /\.jsx?/,
        include: SOURCE_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}