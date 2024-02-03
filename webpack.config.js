var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'styles.css'
});

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                  use: ['css-loader']
                })
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                  }
                ],
                exclude: path.resolve(__dirname, 'src/about_us.html')
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      extractPlugin,
      new HtmlWebpackPlugin({
        filename: 'about_us.html',
        template: 'src/about_us.html'
      }),
      new HtmlWebpackPlugin({
        template: 'src/lab-products.html',
      }),
      new HtmlWebpackPlugin({
        template: 'src/products.html',
      }),
      new HtmlWebpackPlugin({
        template: 'src/contacts.html',
      }),
      new CleanWebpackPlugin(['dist'])
  ]
};