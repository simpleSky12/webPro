const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const webpackConfig = {
    target: 'node',
    entry: {
        server: path.join(utils.APP_PATH, 'index.js')
    },
    output: {
        filename: "[name].bundle.js",
        path: utils.DIST_PATH
    },
    module: {
        // es6语法支持
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }
        ]
    },
    //  排除掉一些我们不会用到的 node 模块
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            // 判断执行的是本地开发环境，还是线下产品环境
            'process.env': {
                NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
            }
        })
    ],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    }
};

module.exports = webpackConfig;
