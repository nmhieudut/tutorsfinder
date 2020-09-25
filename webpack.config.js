var path = require("path");

module.exports = {
  entry: "./index.js",
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react']
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    publicPath: "/",
  },
};
