import path from 'path'
import webpack from 'webpack'

const webpack_config = {
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        include: path.join(__dirname, '../client')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacemnetPlugin()
  ]
}

export default webpack_config
