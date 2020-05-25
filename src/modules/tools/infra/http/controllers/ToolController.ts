import { Request, Response } from 'express'
import ToolsRepository from '../../typeorm/repositories/ToolsRepository'

export default class ToolController {
  async index(req: Request, res: Response): Promise<void> {
    const { tag = '' } = req.query

    const toolsRepository = new ToolsRepository()

    const tools = await toolsRepository.findAll({
      tag: String(tag),
    })

    res.json(tools)
  }

  async create(req: Request, res: Response): Promise<void> {
    const data = req.body

    const toolsRepository = new ToolsRepository()

    const tool = await toolsRepository.create(data)

    res.status(201).json(tool)
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    const toolsRepository = new ToolsRepository()

    await toolsRepository.deleteById(id)

    res.sendStatus(204)
  }
}
