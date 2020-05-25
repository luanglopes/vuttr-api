import { getMongoRepository, MongoRepository } from 'typeorm'

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'
import IUserDTO from '@modules/users/dtos/IUserDTO'
import User from '../schemas/User'

export default class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<User>

  constructor() {
    this.ormRepository = getMongoRepository(User)
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    const user = this.ormRepository.findOne({ email })

    return user
  }

  async create(data: Omit<IUserDTO, 'id'>): Promise<IUserDTO> {
    const user = this.ormRepository.create(data)

    await this.ormRepository.save(user)

    return user
  }
}
