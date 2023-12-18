const HtmlWebpackPlugins = require('html-webpack-plugin')
const path = require('path');


const PATH = {
   app: path.resolve(__dirname, 'src'),
   build: path.resolve(__dirname, 'dist')
}

module.exports = {

   entry: PATH.app,
   output: {
      path: PATH.build,
      filename: 'bundle.js',
   },

   module: {
      // buat file css
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
   
   plugins : [
         // for html plugins
         new HtmlWebpackPlugins({
            title : 'belajar webpack',
            filename : 'index.html'
         })
      ]
};