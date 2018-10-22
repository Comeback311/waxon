const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const output = {
    css: 'bundle.css',
    js: 'bundle.js'
};

module.exports = {
    entry: [
        './app/App'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public',
        filename: output.js
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(scss)$/,
            loader: 'import-glob-loader',
            exclude: /(node_modules)/,
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }, {
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.(sass|scss)$/,
            include: path.resolve(__dirname, 'app'),
            use: [
                MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './../public/' + output.css,
            allChunks: true,
        })
    ]
}
