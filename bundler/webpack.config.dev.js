const path = require("path");
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

module.exports = merge(
    commonConfiguration, {
    mode: "development",
    
    devServer:
          {
            open: true,
            contentBase: path.resolve(__dirname, "../", "static")
          },
    devtool: "source-map",
  }
)
