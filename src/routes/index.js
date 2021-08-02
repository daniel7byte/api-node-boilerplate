import { Router } from 'express'
import Response from '../helpers/response.helper'
// routes
import userRouter from './api/user.routes'
const router = Router()

router.use('/users', userRouter())

router.get('/', (req, res) => {
  const response = new Response(res)
  return response.json(
    response.statusCode.OK,
    null,
    'Welcome to Ecommerce API!'
  )
})

export default router
