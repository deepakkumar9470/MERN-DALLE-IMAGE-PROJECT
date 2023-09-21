import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connect from './db/db.js'
const app = express()
const PORT = process.env.PORT || 5000 
import dalleRoute from './routes/dalle.js'
import postRoute from './routes/post.js'

app.use(cors())
app.use(express.json({limit : '50mb'}))


app.use('/api/post', postRoute)
app.use('/api/dalle', dalleRoute)

const startserver = () =>{
    connect();
    app.listen(PORT, ()=>{
        console.log(`Server running on PORT ${PORT}`)
    })
}

startserver();


