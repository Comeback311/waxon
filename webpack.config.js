const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const output = {
    css: 'bundle.css',
    js: 'bundle.js'
};

module.exports = {
    entry: [
        './app/app.jsx',
        './app/styles.scss'
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
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            }
        }, {
            test: /\.(sass|scss)$/,
            include: path.resolve(__dirname, 'app'),
            use: ExtractTextPlugin.extract({
                use: [{
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
                }]
            })
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },
    // plugins: [
    //     new ExtractTextPlugin({
    //         filename: './../public/' + output.css,
    //         allChunks: true,
    //     })
    // ]
}
