const config = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const path = require('path');


const PATH = {
   app: path.resolve(__dirname, 'src'),
   build: path.resolve(__dirname, 'dist')
}

module.exports = merge(config, {
   devtool: false,
   mode: 'production',
   entry: PATH.app,
   output: {
      path: PATH.build,
      filename: 'bundle.js',
   },
});