import './env'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

if (!process.env.PORT) {
  throw new Error('Expected env PORT not set')
}

function start () {
  const app = express()
  app.use(helmet())

  // TODO: Set CORS options here
  app.use(cors())
  app.use(morgan('combined'))

  // TODO: Routers
  app.get('/hello', (req, res) => {
    res.send('Hello')
  })

  app.listen(process.env.PORT, () => {
    console.log('Listening on port %s', process.env.PORT)
  })
}

start()

