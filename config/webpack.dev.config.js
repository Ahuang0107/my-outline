const path = require("path");

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
    devtool: "eval-cheap-module-source-map",
    cache: false,
    devServer: {
      port,
      compress: true,
      open: true,
    },
  };
};
