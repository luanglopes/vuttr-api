import IToolsRepository, {
  IFindAllToolsParams,
} from '@modules/tools/repositories/IToolsRepository'
import { ITool } from '@modules/tools/entities/ITool'
import Tool, { ToolDocument, ToolProps } from '../schemas/Tool'

export default class ToolsRepository implements IToolsRepository {
  private toolModel: typeof Tool

  constructor() {
    this.toolModel = Tool
  }

  private normalizeDocument(toolDocument: ToolDocument): ITool {
    const { _id, __v, ...toolData } = toolDocument.toJSON() as ToolProps

    return { id: String(_id), ...toolData }
  }

  async findAll({ tag }: IFindAllToolsParams): Promise<Array<ITool>> {
    const query = tag ? { tags: { $in: [tag] } } : {}

    const tools = await this.toolModel.find(query)

    return tools.map(this.normalizeDocument)
  }

  async create(data: Omit<ITool, 'id'>): Promise<ITool> {
    const tool = await this.toolModel.create(data)

    return this.normalizeDocument(tool)
  }

  async deleteById(id: string): Promise<void> {
    await this.toolModel.deleteOne({ _id: id })
  }
}
