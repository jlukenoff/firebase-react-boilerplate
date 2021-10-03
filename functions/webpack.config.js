/* eslint-disable */
const path = require("path");

const ENTRY_POINT = path.resolve(__dirname, "client/index.tsx");
const TSCONFIG_FILE = path.resolve(__dirname, "tsconfig.client.json");
const OUT_DIR = path.resolve(__dirname, 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
  mode,
  entry: ENTRY_POINT,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{loader: "ts-loader", options: {configFile: TSCONFIG_FILE}}],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: OUT_DIR
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    }),
    new HotModuleReplacementPlugin()
  ]
};
