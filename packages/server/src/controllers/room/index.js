import { Router } from 'express'
const roomRouter = Router()

roomRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  })
})

export default roomRouter
