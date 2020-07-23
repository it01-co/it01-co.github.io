const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',   // 环境变量
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {    // 配置别名
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false   // 参数配置 是否保留空白
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // babel7 新特性，向上查找babel全局配置，
          options: {
            rootMode: 'upward'
          }
        }
      },
      {
        test: /\.less$/,
        sideEffects: true,    //副作用 // https://github.com/webpack/webpack/issues/6571
        use: [
          'style-loader', // .loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）
          'css-loader',
          'postcss-loader', // 自动添加浏览器前缀
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          path.resolve(__dirname, '../lib/h-markdown-loader/src/index')
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
