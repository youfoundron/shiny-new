import cors from 'cors'
import path from 'path'
import express from 'express'
import horizon from '@horizon/server'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import routes from './routes'
import config from '../config'
// import reactMiddleware from './middleware/reactMiddleware'

const app_config = config.get('app')
const hz_config = config.get('horizon')
const DEBUG = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || app_config.port

const server = express()

// Server Settings
server.use(cors())
server.use(cookieParser())
server.use(compression())
server.set('env', DEBUG ? 'development' : 'production')
server.set('views', path.resolve(__dirname, '../views'))
server.set('view engine', 'jade')

// Routes and Middleware
server.use('/', routes)
// server.use(reactMiddleware)

const run = () => {
  // Start express server
  const http_server = server.listen(PORT, (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(`Express listening in ${server.get('env')} on port ${PORT}`)
  })

  // Start Horizon server
  const horizon_server = horizon(http_server, hz_config)
}

// Let's roll!
run()
