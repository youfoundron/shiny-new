import config from '../../config'
import fs from 'fs'
import path from 'path'

export default function(app, server) {
  let routers = {}

  for (let file of fs.readderSync(__dirname)) {
    const file_path = path.join(__dirname, file)
    const name = path.basename(file, path.extname(file))
    const stats = fs.statSync(file_path)
    // Continue condition
    if (  (/^index\./.test(file)) ||
         (/^\.test(file)) ||
         !stats.isFile() )
    {
      continue
    }

    routers[name] = require(file_path)(app, server)

  }

  return routers
}
