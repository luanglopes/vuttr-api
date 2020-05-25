import IToolDTO from '../dtos/IToolDTO'
import IFindAllToolsDTO from '../dtos/IFindAllToolsDTO'

export default interface IToolsRepository {
  findAll(params?: IFindAllToolsDTO): Promise<Array<IToolDTO>>
  create(data: Omit<IToolDTO, 'id'>): Promise<IToolDTO>
  deleteById(id: string): Promise<void>
}
