const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
module.exports = {
  entry: './entry.js',
  output: {
    filename: './dist/bundle.js'
  },
  // webpack-dev-server config for refreshing and more
  devServer: {
    inline: true,
    port: 4000,
    contentBase: './src'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};