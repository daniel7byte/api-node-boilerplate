class BaseService {
  constructor(repository) {
    this.repository = new repository()
  }

  async getAll() {
    const response = await this.repository.getAll()
    return response
  }

  async get(id) {
    const response = await this.repository.get(id)
    return response
  }

  async create(payload) {
    const response = await this.repository.create(payload)
    return response
  }

  async update(id, payload) {
    const response = await this.repository.update(id, payload)
    return response
  }

  async delete(id) {
    const response = await this.repository.delete(id)
    return response
  }
}

export default BaseService
