import { Request, Response } from 'express'

import CreateUserService from '@modules/users/services/CreateUserService'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

export default class UserCotroller {
  async create(req: Request, res: Response): Promise<void> {
    const userRepository = new UsersRepository()
    const createUserService = new CreateUserService(userRepository)

    const { name, email, password } = req.body

    const user = await createUserService.execute({ name, email, password })

    res.status(201).json(user)
  }
}
