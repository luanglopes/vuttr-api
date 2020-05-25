import { Router } from 'express'

import UserCotroller from '../controllers/UserController'

const usersRouter = Router()
const userController = new UserCotroller()

usersRouter.post('/', userController.create)

export default usersRouter
