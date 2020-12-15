const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const meals = require('./routes/meals')
const orders = require('./routes/orders')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})


app.get('/api/meals', meals)
app.get('/api/orders', orders)

module.exports = app

