const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.resolve(__dirname,'src/index.jsx')
  ],
});

module.exports = config;
