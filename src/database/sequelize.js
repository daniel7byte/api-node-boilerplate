module.exports = {
  local: {
    url: process.env.DB_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    define: {
      underscored: true
    }
  },
  test: {
    url: process.env.DB_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    define: {
      underscored: true
    }
  },
  production: {
    url: process.env.DB_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    define: {
      underscored: true
    }
  },
  development: {
    url: process.env.DB_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    define: {
      underscored: true,
    },
    logging: false
  }
}
