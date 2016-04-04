import etc from 'etc'
import path from 'path'
import { isFunction } from 'lodash'

// load args, the env vars
etc.argv().env()

// force load in the process.env
etc.set('env', process.env)

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

// Loade NODE_ENV files
const env_dir = path.join(__dirname, env)
etc.folder(env_dir)

if (env === 'development') {
  console.log(etc.toJSON())
}

export default etc
