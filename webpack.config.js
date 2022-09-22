const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //开发环境
  mode: "development",
  //js源文件
  entry: "./src/index.js",
  //生成js文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", //js文件名
  },
  //设置插件参数
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //html源文件(生成index.html)
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", //css文件名
    }),
  ],
  //引用css
  module: {
    rules: [
      //css配置
      {
        test: /\.css$/,
        // MiniCssExtractPlugin.loader 和 "style-loader" 二选一
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //sass配置
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //less配置
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      //less配置
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      //图片配置
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
