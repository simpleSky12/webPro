const webpackMerge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.config.base');

const webpackConfig = webpackMerge(baseWebpackConfig, {
    // 为了方便后期调试
    devtool: 'eval-source-map',
    mode: 'development',
    // 阻止日志消息的传出
    stats: { children: false }
});

module.exports = webpackConfig;
