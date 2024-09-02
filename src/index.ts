import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

// Configurar CORS
app.use(cors())

// Rota simples que retorna um JSON básico
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' })
})

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
