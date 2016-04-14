import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import dev from './webpack/webpack.dev'
import prod from './webpack/webpack.prod'

const TARGET = process.env.npm_lifecycle_event
const DEBUG = process.env.NODE_ENV !== 'production'
const PATHS = {
  client: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist')
}

// Common paths & plugins for
// managing complex configurations
const common = {
  entry: {
    client: PATHS.client
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  modules: {
    loaders: [
      {
        test: /\.sass$/,
        loader: 'sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [

  ]
}

// Evaluate which config to return
const webpack_config = (() => {
  switch (TARGET) {
    case 'start':
      return merge(common, {})
      // return merge(common, dev)
    case 'start:prod':
      return merge(common, {})
      // return merge(common, prod)
    case 'build':
      return merge(common, {})
      // return merge(common, prod)
    default:
      return merge(common, {})
      // return merge(common, prod)
  }
})()


export default webpack_config
