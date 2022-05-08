const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isProd) => {
  const rootFolder = process.cwd();
  return {
    entry: path.join(rootFolder, "src/demo/index.tsx"),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "~": path.join(rootFolder, "src/demo"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...cssLoader(isProd),
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...postcssLoader(isProd),
          ],
        },
        {
          test: /\.less$/,
          use: [
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...cssLoader(isProd),
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...postcssLoader(isProd),
            "less-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...cssLoader(isProd),
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            ...postcssLoader(isProd),
            "sass-loader",
          ],
        },
        {
          test: /\.(otf|ttf|eot|woff|woff2)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[hash][ext][query]",
          },
        },
        {
          test: /\.(jpg|jpeg|png)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[hash][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(rootFolder, "public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].chunk.css",
      }),
    ],
  };
};

const cssLoader = (isProd) => [
  isProd ? MiniCssExtractPlugin.loader : "style-loader",
  "css-loader",
];

const postcssLoader = (isProd) => [
  {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [isProd && "postcss-preset-env"],
      },
    },
  },
];
