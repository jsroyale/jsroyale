import express from 'express'

const app = express()

app.get('/', (req, res) => res.end('Hello World!'))

export default function () {
  app.listen(3001)
}
