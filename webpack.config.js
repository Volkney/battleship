const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
     // Runtime code for hot module replacement
     hot: 'webpack/hot/dev-server.js',
     // Dev server client for web socket transport, hot and live reload logic
     client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: false,
    client: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development ish',
    }),
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],


  },
};