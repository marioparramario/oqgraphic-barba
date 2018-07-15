const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { author, config , version } = require('./package.json');
const filesLocal = 'file-loader?name=[name].[ext]';

module.exports = {
    entry: [
      './less/index.less',
      './js/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            { test: /\.(eot|ttf|woff|woff2|svg)$/, loader: filesLocal },
            { test: /\.js$/, exclude: /node_modules/,loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        ]
    },
    plugins: [        
        new HtmlWebpackPlugin({
            template: 'illustration/index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'graphic/index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'digital/index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'about/index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            author: author.name,
            title: config.title,
            version: `v${version}`,
            inject: false
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        filename: 'index.bundle.js',
        contentBase: './',
        port: 3000,
        publicPath: '/',
        stats: {
            colors: true
        }
    }
};
