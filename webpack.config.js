const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/routers.jsx',
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: './dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: "url-loader?limit=8192&name=./img/[hash:8].[name].[ext]"
        //小于8192字节的图片会被转换为base64编码加入css
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Created by Reddy Huang.'),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html'
    })
  ]
};
