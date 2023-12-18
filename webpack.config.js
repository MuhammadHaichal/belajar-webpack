const path = require('path');


const PATH = {
   app : path.resolve(__dirname, 'src'),
   build : path.resolve(__dirname, 'dist')
}

module.exports = {
   // mode: 'development',
   mode: 'production',
   entry: PATH.app,
   output: {
      path: PATH.build,
      filename: 'bundle.js',
   },
};