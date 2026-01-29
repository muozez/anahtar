import express from 'express'
import cors from 'cors'
import compression from 'compression'
import secrets from './src/config/dotenv.ts'

const app = express()

app.use(cors())
app.use(compression())
app.use(express.json())

const PORT = secrets.port || 3000

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})