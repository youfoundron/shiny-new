import path from 'path'
import { isFunction } from 'lodash'

// load args, the env vars
let etc = require('etc')()

etc.parsers['js'] = (filePath) => {
  const f = require(filePath)
  return (
    (isFunction(f))
    ? f(etc)
    : f
  )
}

etc.argv().env()

// force load in the process.env
etc.set('env', process.env)

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

// load NODE_ENV files
const env_dir = path.join(__dirname, env)
etc.folder(env_dir)

// load in default files
etc.folder(__dirname)

export default etc
