const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = () => {
  const rootFolder = process.cwd();
  const port = 8000;
  return {
    mode: "development",
    output: {
      path: path.join(rootFolder, "dist"),
      filename: "js/[name].js",
      clean: true,
    },
    devtool: "cheap-module-source-map",
    plugins: [new ReactRefreshPlugin()],
    devServer: {
      port,
      hot: true,
      historyApiFallback: true,
    },
  };
};
