import http from 'http'
import express from 'express'
import Socket from 'socket.io'

const app = express()
const server = http.createServer(app)
const socket = Socket(server)
global.socket = socket

socket.on('connection', (socket) => {
  console.log('connected', socket.id)
})

app.get('/', (req, res) => res.end('Hello World!'))

export default function () {
  server.listen(3001)
  return new Promise((resolve) => {
    resolve(app)
  })
}
