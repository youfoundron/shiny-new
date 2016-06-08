import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import merge from 'webpack-merge'
import WebpackAnybarPlugin from 'webpack-anybar-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'

const TARGET = process.env.npm_lifecycle_event
const DEBUG = process.env.NODE_ENV !== 'production'
const PATHS = {
  entry: path.join(__dirname, '../client'),
  build: path.join(__dirname, '../build'),
  static: path.join(__dirname, '../static')
}

// Environment specific configs
import dev from './webpack.client.dev'
import prod from './webpack.client.prod'

// Common paths & plugins for managing the configuration
const common = {
  entry: {
    app: PATHS.entry
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: PATHS.entry
  },
  module: {
    loaders: [
      { // application js
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.entry,
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { // vendor scripts
        test: /\.jsx?$/,
        loader: 'script',
        include: path.join(PATHS.static, 'vendor')
      },
      { // styles
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass', 'scss'],
        include: path.join(PATHS.entry, 'styles')
      },
      { // json
        test: /\.json$/,
        loader: 'json'
      },
      { // images, video, & audio
        test: /\.(jpe?g|png|gif|mp3|ogg|wav|ogv|mov|mp4|svg|ttf|eot|woff)/,
        loader: 'file?limit=2000',
        include: PATHS.static
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building client bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built client in ${t}.`));
      }
    }),
    new webpack.DefinePlugin({
      BUILD_TIME: JSON.stringify((new Date()).getTime())
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackAnybarPlugin({
      port: 1738
    })
  ]
}

const webpack_config = (() => {
  switch (TARGET) {
    case 'start' :
      return merge(common, dev)
    case 'start:prod':
      return merge(common, prod)
    case 'build':
      return merge(common, prod)
    default:
      return merge(common, {})
  }
})()

export default webpack_config
