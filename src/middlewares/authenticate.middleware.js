import jwt from 'jwt-simple'
import dayjs from 'dayjs'
import Response from '../helpers/response.helper'

const authenticate = (req, res, next) => {
  const response = new Response(res)
  try {
    if (!req.headers.authorization) {
      return response.error(
        response.statusCode.NOT_AUTHORIZED,
        ['Unauthorized. Authorization token is required']
      )
    }

    const bearer = req.headers.authorization.split(' ')[0]

    if (bearer !== 'Bearer') {
      return response.error(
        response.statusCode.NOT_AUTHORIZED,
        ['Unauthorized. The token structure is not valid'],
      )
    }

    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token, process.env.TOKEN_SECRET_KEY)

    if (payload.exp <= dayjs().unix()) {
      return response.error(
        response.statusCode.NOT_AUTHORIZED,
        ['Unauthorized. Token expired'],
      )
    }

    next()
  } catch (e) {
    return response.error(
      response.statusCode.NOT_AUTHORIZED,
      ['Unauthorized. Token is not valid'],
    )
  }
}

export default authenticate
