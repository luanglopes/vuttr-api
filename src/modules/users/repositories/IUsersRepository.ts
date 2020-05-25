import IUserDTO from '../dtos/IUserDTO'

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUserDTO | undefined>
  create(data: Omit<IUserDTO, 'id'>): Promise<IUserDTO>
}
