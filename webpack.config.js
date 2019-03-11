const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./Root.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  // plugins: plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};