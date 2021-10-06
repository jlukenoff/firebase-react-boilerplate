/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENTRY_POINT = path.resolve(__dirname, "client/index.tsx");
const OUT_DIR = path.resolve(__dirname, 'public')

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

const webpackConfig =  {
  mode,
  entry: ENTRY_POINT,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{loader: "ts-loader"}],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: OUT_DIR,

  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 5000,
    hot: true,
  },
};



module.exports = webpackConfig;