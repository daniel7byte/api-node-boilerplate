import db from '../database'

class BaseRepository {
  constructor(model) {
    this.db = db
    this.model = model
  }

  getAll() {
    return this.db[this.model].findAll()
  }

  get(id) {
    return this.db[this.model].findByPk(id)
  }

  create(model) {
    return this.db[this.model].create(model)
  }

  update(id, model) {
    const data = model
    delete data.created_at
    delete data.updated_at
    return this.db[this.model].update(data, {
      where: {
        id: Number(id),
      },
    })
  }

  destroy(id) {
    return this.db[this.model].destroy({
      where: {
        id,
      },
    })
  }
}

export default BaseRepository
