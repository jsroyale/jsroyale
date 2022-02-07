import { Router } from 'express'
import roomRouter from './room'

const apiRouter = Router()

// API ROUTES
apiRouter.use('/room', roomRouter)

export default apiRouter
