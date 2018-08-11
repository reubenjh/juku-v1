const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

// middleware
server.use(cors('*'))
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// routers
server.use('/api/prints', require('./routes/prints'))

module.exports = server
