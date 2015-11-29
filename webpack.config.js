'strict mode';

var path = require('path');

module.exports = {
  entry: './client/source/js/components/Application.jsx', // route component
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'client'),
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        } 
      }
    ]
  }
};
