
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//initialise express
const app = express()
//connect db
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())


//routes
app.get('/', (req, res)=> res.send("API Working"))
app.post('/webhooks', clerkWebhooks)



//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})