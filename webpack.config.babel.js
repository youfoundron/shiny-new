import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'

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
  plugins: [
    
  ]
}

// Evaluate which config to return
const webpack_config = (() => {
  switch (TARGET) {
    case 'start':
      return merge(common, {})
    case 'start:prod':
      return merge(common, {})
    case 'build':
      return merge(common, {})
    default:
      return merge(common, {})
  }
})()

console.log(webpack_config)

export default webpack_config
