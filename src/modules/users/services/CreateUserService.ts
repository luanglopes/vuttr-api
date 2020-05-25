import { hash } from 'bcrypt'

import AppError from '@shared/errors/AppError'
import IUserDTO from '../dtos/IUserDTO'
import { IUsersRepository } from '../repositories/IUsersRepository'

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    email,
    password,
  }: Omit<IUserDTO, 'id'>): Promise<IUserDTO> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new AppError('Email already in use')
    }

    const passwordHash = await hash(password, 10)

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    })

    return user
  }
}

export default CreateUserService
