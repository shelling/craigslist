var path = require("path");
var webpack = require("webpack");

var config = module.exports = {
  context: __dirname,

  entry: {
    application: ["./src/main.js"],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },

  externals: {
    Parse: "Parse",
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    moduleDirectories: ["node_modules"],
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx',
      },
    ]
  },
};
