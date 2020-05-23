import { Router } from 'express'

const toolsRouter = Router()

toolsRouter.get('/', (req, res) => {
  return res.json({ message: 'Hello from tools endpoint' })
})

export default toolsRouter
