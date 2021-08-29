import express from 'express'
import cors from 'cors'
import apiRouter from './routes'

const app = express()
const port = process.env.PORT || 3000

if (process.env.APP_ENV === 'development') process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

apiRouter
  .use(cors())
  .use(express.json())

// Routes
app.use('/api/v1', apiRouter)

// Say hello
app.get('/', (req, res) => (
  res.status(200).json({ message: 'Bienvenido al Ecommerce!' })
))

// Local environment
if (process.env.APP_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Servidor escuchando en :${port}`)
  })
} else {
  exports.core = app
}
