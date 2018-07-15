const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { author, config , version } = require('./package.json');

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
            { test: /\.js$/, exclude: /node_modules/,loader: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                    attrs:[':data-src'],
                    minimize: false,
                    conservativeCollapse: false,
                    interpolate: true
                    }
                }
            },
            { 
                test: /\.(jpg|png|svg)$/, 
                loader: 'file-loader?name=./assets/images/[name].[ext]',
                options: {
                    name: '[name].[ext]',
                    outputPath: './dist/assets/font/'
                }
            },
            { 
                test: /\.(eot|ttf|woff|woff2)$/, 
                loader: 'file-loader?name=./assets/font/[name].[ext]',
                options: {
                    name: '[name].[ext]',
                    outputPath: './dist/assets/images/'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'illustration/index.html',
            template: 'illustration/index.html',
            inject: false
        }),   
        new HtmlWebpackPlugin({
            filename: 'graphic/index.html',
            template: 'graphic/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'digital/index.html',
            template: 'digital/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'about/index.html',
            template: 'about/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: false
        }),
        new CopyWebpackPlugin([
            { from:'assets/', to:'assets/' }
        ]),
    ],
    devtool: 'eval-source-map',
    devServer: {
        filename: 'index.bundle.js',
        contentBase: './dist',
        port: 3000,
        publicPath: '/',
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        },
    }
};
