import { Router } from 'express'
import ToolController from '../controllers/ToolController'

const toolsRouter = Router()
const toolController = new ToolController()

toolsRouter.get('/', toolController.index)
toolsRouter.post('/', toolController.create)
toolsRouter.delete('/:id', toolController.delete)

export default toolsRouter
