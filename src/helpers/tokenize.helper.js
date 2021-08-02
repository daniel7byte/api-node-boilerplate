import jwt from 'jwt-simple'
import dayjs from 'dayjs'

export default {
  create: (userId) => {
    const payload = {
      sub: {
        user_id: userId,
      },
      iat: dayjs().unix(),
      exp: dayjs().add(1, 'month').endOf('month').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_SECRET_KEY)
  }
}
