import { MongoRepository, getMongoRepository } from 'typeorm'

import IToolsRepository from '@modules/tools/repositories/IToolsRepository'
import IToolDTO from '@modules/tools/dtos/IToolDTO'
import IFindAllToolsDTO from '@modules/tools/dtos/IFindAllToolsDTO'
import Tool from '../schemas/Tool'

export default class ToolsRepository implements IToolsRepository {
  private ormRepository: MongoRepository<Tool>

  constructor() {
    this.ormRepository = getMongoRepository(Tool)
  }

  async findAll({ tag }: IFindAllToolsDTO): Promise<Array<IToolDTO>> {
    const query = tag ? { where: { tags: tag } } : {}

    const tools = await this.ormRepository.find(query)

    return tools
  }

  async create(data: Omit<IToolDTO, 'id'>): Promise<IToolDTO> {
    const tool = this.ormRepository.create(data)

    await this.ormRepository.save(tool)

    return tool
  }

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }
}
