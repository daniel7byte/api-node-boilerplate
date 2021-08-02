import db from './models'

// Sync database
db.sequelize.sync({ force: false })

export default db