import express, {Express} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app:Express = express()

dotenv.config()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3003.')
})

export default app