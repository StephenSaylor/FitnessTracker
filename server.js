const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})