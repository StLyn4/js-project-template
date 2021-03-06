const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.min.js',
	  clean: true,
    publicPath: '',
    library: {
      name: 'Lib',
      type: 'umd',
      export: 'default',
      umdNamedDefine: true,
    },
    globalObject: 'this',
  },
  mode: 'production',
  plugins: [
    new webpack.ProgressPlugin(),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
