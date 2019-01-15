//trying out new Webpack4 and its new properties. 

// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     //no need to config entry or output point unless we want to customize. default src/index.js and dist/main.js
//     module: {
//         rules: [
//             {
//                 //--module-bind lets us specify loaders from the command line
//                 //to use without configuration change npm scripts in package.json  with ... --module-bind js=babel-loader"
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader",
//                         options: { minimize: true }
//                     }
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         }),
//         new MiniCssExtractPlugin({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         })
//     ]
// };

/*
every file with js or jsx exension webpack pipes the code through babel-loader
transforming ES6 to ES5 for older browsers. 
same with the css files where file name or chunk filename has a css extension will be transpiled through babel. 
*/

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};