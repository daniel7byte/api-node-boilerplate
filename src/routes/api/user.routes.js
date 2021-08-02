import { Router } from 'express'
import Controller from '../../controllers/user.controller'

const router = Router()
const UserController = new Controller()

const UserRoutes = () => {
  router.get('/', UserController.index.bind(UserController))
  router.get('/:id', UserController.get.bind(UserController))
  router.post('/', UserController.create.bind(UserController))
  router.put('/:id', UserController.update.bind(UserController))
  router.delete('/:id', UserController.destroy.bind(UserController))

  return router
}

export default UserRoutes
