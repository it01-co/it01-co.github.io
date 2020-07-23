const path = require('path');
/**
 * webpack-merge做了两件事：它允许连接数组并合并对象，而不是覆盖组合
 * @des
 * const merge = require("webpack-merge");
    merge(
        {a : [1],b:5,c:20},
        {a : [2],b:10, d: 421}
    )
    //合并后的结果
    {a : [1,2] ,b :10 , c : 20, d : 421}
 */
const merge = require('webpack-merge');
const config = require('./webpack.base');
/**
 * 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题,可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
 * 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = merge(config, {
  devServer: {
    open: false,
    port: 9999,
    host: '0.0.0.0',
    stats: 'errors-only',    // 统计错误信息
    disableHostCheck: true,   // 解除主机检查：新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname不是配置内的，将中断访问。
  },
  entry: {
    'health-docs': './docs/src/index.js',
    'health-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'   // 编译后名字的设置
  },
  optimization: {            // 优化
    splitChunks: {      //对于动态导入模块，默认使用 webpack v4+ 提供的全新的通用分块策略(common chunk strategy)。请在 SplitChunksPlugin 页面中查看配置其行为的可用选项。
      cacheGroups: {
        chunks: {
          chunks: 'all',   // 有效值为all、async和initial。提供all功能特别强大，因为这意味着块甚至可以在异步块和非异步块之间共享。
          minChunks: 2,       // 拆分前必须共享模块的最小块数。
          minSize: 0,
          name: 'chunks'
        }
      }
    }
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'health-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'health-mobile'],
      template: 'docs/src/index.tpl',
      filename: 'mobile.html',
      inject: true
    })
  ]
});
