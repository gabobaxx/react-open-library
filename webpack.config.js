const path = require('path');
// Config
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/app/index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
