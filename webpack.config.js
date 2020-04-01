/*
* 官方写法
* const config = {
*   entry: './src/index.js
* }
*
* module.exports = config
* */

/*console.log(path.resolve()); // 输出当前目录的绝对路径
//C:\Users\17718\Desktop\webpackDemo

console.log(path.join(__dirname), './dist'); // 输出当前目录下的拼接路径
//C:\Users\17718\Desktop\webpackDemo ./dist*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    // 入口文件
    entry: "./src/index.js",
    // 输出的文件以及存放的路径位置
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './dist')
    },
    // 压缩 js和css
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            // 利用正则表达式，来查找 .css 文件
            {
                test: /\.(scss|sass)$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader']
            },
            // 配置 babel，编译 es6 语法
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        // 热模块更替打开
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 形成在dist输出目录下的 打包文件
            filename: "index.html",
            // 用来充当html模版的文件
            template: "template.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'assets'),
                to: 'assets'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};
