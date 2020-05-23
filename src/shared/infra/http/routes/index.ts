import { Router } from 'express'

import toolsRouter from '@modules/tools/infra/http/routes'

const router = Router()

router.use('/tools', toolsRouter)

router.get('/', (req, res) => {
  return res.json({ message: 'Hello from API' })
})

export default router
