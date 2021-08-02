import Sequelize from 'sequelize'
import { config as dotEnvConfig } from 'dotenv-flow'

dotEnvConfig()

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DRIVER,
      protocol: process.env.DB_DRIVER,
      dialectOptions: { ssl: false },
      logging: false,
      define: {
        underscored: true
      },
      pool: {
        min: 0, // numero minimo de conexiones permitidas
        max: 10, // numero de conexiones maximas permitidas
        idle: 15000, // 15s maximos de inactvidad antes de desconectarse
        acquire: 60000 // 60s maximos de intento de conexion antes de lanzar error
      }
    }
  )

export default sequelize
