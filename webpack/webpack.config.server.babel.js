import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import WebpackAnybarPlugin from 'webpack-anybar-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'

const TARGET = process.env.npm_lifecycle_event
const DEBUG = process.env.NODE_ENV !== 'production'
const PATHS = {
  entry: path.join(__dirname, '../server'),
  build: path.join(__dirname, '../build'),
  static: path.join(__dirname, '../static')
}

export default {
  target: 'node',
  context: __dirname,
  cache: true,
  entry: {
    server: PATHS.entry
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: PATHS.entry,
    alias: {
      utils: path.join(PATHS.entry, '/utils')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.entry,
        exclude: /node_modules/
      },
      {
        test : /\.json$/,
        loader : 'json'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building server bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built server in ${t}.`));
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      BUILD_TIME: JSON.stringify((new Date()).getTime())
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackAnybarPlugin({
      port: 1738
    })
  ],
  externals: [
    {
      winston: 'commonjs winston',
      express: 'commonjs express',
      later: 'commonjs later',
      '@horizon/server': 'commonjs @horizon/server'
    }
  ]
}
