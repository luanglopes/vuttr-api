import { Request, Response } from 'express'
import ToolsRepository from '../../mongoose/repositories/ToolsRepository'

const toolsRepository = new ToolsRepository()

export default class ToolController {
  async index(req: Request, res: Response): Promise<void> {
    const { tag = '' } = req.query

    const tools = await toolsRepository.findAll({
      tag: String(tag),
    })

    res.json(tools)
  }

  async create(req: Request, res: Response): Promise<void> {
    const data = req.body

    const tool = await toolsRepository.create(data)

    res.status(201).json(tool)
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    await toolsRepository.deleteById(id)

    res.sendStatus(204)
  }
}
