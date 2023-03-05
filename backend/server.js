const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require("cors")
const port = process.env.PORT || 5000
const app=express()


connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api', require('./routes/userRoute'))
app.use('/api', require('./routes/addMovieRoute'))
app.use('/api', require('./routes/searchMoive'))

app.listen(port, () => console.log(`Server started on port ${port}`))