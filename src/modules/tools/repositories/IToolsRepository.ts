import { ITool } from '../entities/ITool'

export interface IFindAllToolsParams {
  tag?: string
}

export default interface IToolsRepository {
  findAll(params?: IFindAllToolsParams): Promise<Array<ITool>>
  create(data: Omit<ITool, 'id'>): Promise<ITool>
  deleteById(id: string): Promise<void>
}
