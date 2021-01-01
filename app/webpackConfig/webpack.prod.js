const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const Webpack = require("webpack")
const dotenv = require("dotenv")
const common = require("./webpack.common.js")

dotenv.config()

module.exports = merge(common, {
  mode: "production",
  bail: true,
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(), new Webpack.EnvironmentPlugin(["NODE_ENV"])],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
