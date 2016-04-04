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
