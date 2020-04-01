const path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
    } else {
      // 为开发环境修改配置
      return {
        resolve: {
          alias: {
            // 利用字符串 替换 文件的绝对路径
            '@js': path.resolve(__dirname, './src/assets/js'),
            '@css': path.resolve(__dirname, './src/assets/css'),
            '@img': path.resolve(__dirname, './src/assets/img'),
            '@com': path.resolve(__dirname, './src/components'),
            '@': path.resolve(__dirname, './src')
          }
        }
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8000
  }
}
