import Service from './base.service'
import UserRepository from '../repositories/user.repository'

class UserService extends Service {
  constructor() {
    super(UserRepository)
  }
}

export default UserService
