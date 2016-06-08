import webpack from 'webpack'
import config from '../config'
import { assign, clone, cloneDeep, union } from 'lodash'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'

const app_config = config.get('app')
const PORT = app_config.port
const BASE_URL = `http://localhost:${PORT}`

export default {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${BASE_URL}`,
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: `http://127.0.0.1:${PORT}/static/`,
    pathinfo: true,
    crossOriginLoading: 'anonymous'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    publicPath: `${BASE_URL}/static`,
    host: '127.0.0.1',
    hot: true,
    historyApiFallback: true,
    // contentBase: ,
    port: 9095,
    stats: {
      colors: true,
      chunkModules: false,
      modules: false
    }
  }
}
