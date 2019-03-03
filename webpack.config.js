var path = require('path');
var spawn = require('child_process').spawn;

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src')
      }
    ],
  },
  resolve: {
    symlinks: false,
    extensions: [ '.tsx', '.ts', '.node' ]
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: path.resolve(__dirname, '.build'),
  },
  mode: "none",
  watchOptions: {
    ignored: ['build', 'node_modules', '__tests__', '.vscode', 'docs']
  }
};
