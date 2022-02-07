import server from './web/server'
import controllers from './controllers'

server().then((app) => {
  app.use('/api', controllers)
})
