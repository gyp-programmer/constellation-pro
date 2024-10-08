const { name } = require('./package')

module.exports = {
  devServer: {
    port: 8082,
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn:8080/', // 目标接口
        changeOrigin: true, // 是否跨域
        ws: true, // 允许websocket
        secure: false, // 不检查https
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: false, //  关掉ESlint 警告
      errors: false
    }
  },
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}` // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    }
  }
}
