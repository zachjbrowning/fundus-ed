const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.ts', '.tsx','json', '.js'],
      alias: {
        process: "process/browser"
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          }
        }
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name]-[contenthash].js",
      chunkFilename: "[id]-[chunkhash].js",
      publicPath: '/'
    },
    module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {auto : true},
                importLoaders: 1
              }
            },
            'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/static"}
      ]
    }),
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ]
};