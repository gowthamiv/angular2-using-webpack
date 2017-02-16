var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [                           //plugins is an array
        new HtmlWebpackPlugin({          //instantiate the HtmlWebpackPlugin passing an obj having options here we give template
            template:'./src/index.html'
        })
    ]

};