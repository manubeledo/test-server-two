require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors('*'))

app.listen(PORT, () => {
    console.log(`Server working on : ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})


