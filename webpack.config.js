const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

debugger
const webpackConfig = {
    target: 'node',
    mode: 'development',
    entry: {
        server: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "./dist")
    },
    // 为了方便后期调试
    devtool: 'eval-source-map',
    module: {
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
        new CleanWebpackPlugin()
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
