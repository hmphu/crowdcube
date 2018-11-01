const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  BUILD_DIR: path.resolve(__dirname, 'public/'),
  APP_DIR: path.resolve(__dirname, 'src/'),
  CSS_DIR: path.resolve(__dirname, 'src/styles/main.less'),
};

const config = [
  {
    entry: path.join(paths.APP_DIR, 'index.js'),
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.BUILD_DIR, 'index.html'),
      }),
    ],
    devServer: {
      contentBase: paths.APP_DIR,
    },
    externals: {
      cheerio: 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths.APP_DIR,
          loaders: 'babel-loader',
        },
        {
          test: /\.jsx?/,
          include: paths.APP_DIR,
          loaders: 'babel-loader',
        },
        {
          test: /\.less$/,
          include: paths.APP_DIR,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader' },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: paths.APP_DIR,
          loaders: 'file-loader',
        },
      ],
    },
  },
];

module.exports = config;
