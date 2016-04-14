import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import webpack from 'webpack'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import routes from './routes'
import config from '../webpack.config.babel'
import reactMiddleware from './middleware/reactMiddleware'

const DEBUG = process.env.NODE_ENV !== 'production'
const DEFAULT_PORT = 5000
const server = express()

server.use(cors())
server.use(cookieParser())
server.set('env', DEBUG ? 'development' : 'production')
server.set('port', process.env.PORT || DEFAULT_PORT)
server.set('views', path.resolve(__dirname, '../views'))
server.set('view engine', 'jade')

server.use(compression())

// if (DEBUG) {
//   const compiler = webpack(config)
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const webpackMiddleware = require('webpack-dev-middleware')
//
//   server.use(morgan('dev'))
//   server.use(webpackMiddleware(compiler, {
//     historyApiFallback: true,
//     hot: true,
//     stats: {
//       chunks: false
//     },
//   }))
//   server.use (webpackHotMiddleware(compiler))
// } else {
//   server.use(express.static(path.resolve(__dirname, '../build')))
//   server.use(morgan('combined'))
// }
//
// server.use('/', routes())
// server.use(reactMiddleware)
//
// server.listen(server.get('port'), () => {
//   console.info(`Server running in ${server.get('env')} on port ${server.get('port')}`)
// })
