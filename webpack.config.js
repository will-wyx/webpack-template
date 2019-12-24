const path = require('path')

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  }
}
