const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/apiRouter')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/vending-machine')

app.use(router)

app.listen(3000, function () {
  console.log('The overlord is listening')
})
