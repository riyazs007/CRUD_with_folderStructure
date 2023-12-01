import express from 'express'
import connection from './database/db'
import router from './routes/routes'
import cors from 'cors'

const app=express()
const PORT=1432
app.listen(PORT,()=>console.log(`server doing exercise on PORT ${PORT}`))

connection()
app.use(express.json())
app.use(cors())
app.use('/',router)