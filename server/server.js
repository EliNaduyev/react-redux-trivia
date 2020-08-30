const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api')
const connectToMySqlDB = require('./config/db')


const app = express() 
// connectToMySqlDB()
dotenv.config({ path:'./config/.env' })
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json()) 


app.use('/api',apiRoute)

app.get('/', (req, res) =>{
    res.send('server is working!')
})

app.listen( PORT || 5000, () =>{
    console.log(`server is running on PORT: ${PORT}`)
})