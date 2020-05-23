import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ message: 'Hello from API' })
})

export default router
