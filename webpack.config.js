let path = require("path");

let conf = {
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/dist/",
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};

module.exports = (env, options) => {
  conf.devtool =
    options.mode === "production" ? false : "cheap-module-eval-source-map";
  console.log(options.mode);

  return conf;
};
