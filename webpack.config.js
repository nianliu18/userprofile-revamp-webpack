// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

//npm package @babel/node allows the use of import instead of require. but if want to use require thats fine too.
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    //used to import anything from src folder in relative paths instead of abosolute. (anything + nodemodules)
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    //tells ewbpack-dev-server what files are needd to be served, case: everything from src needs to be outputted in the browser
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    module: {
        rules: [
            {
                //compile any React, ES6 and above into normal ES5 syntax
                test: /\.(js|jsx)$/,
                //discard node_modules from being compiled
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/\.(css|scss)$/,
                use: [
                    //creates style nodes from JS strings
                    'style-loader',
                    //translates CSS into CommonJS
                    'css-loader',
                    //compiles Sass to CSS using Node Sass by default
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    //set what plugins we need in app.
    plugins: [
        //cleans webpack automatically remove build folders before building
        new CleanWebpackPlugin(['../dist']),
        //tells server that bundle.js should be injected(added)to our index.html file
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html')
        })
    ]
}
