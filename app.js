const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const {
    Schema
} = mongoose
require('dotenv').config()
const bodyParser = require('body-parser')
const Todos = require('./db')
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, './')))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())
const posts_file = require('./posts')
app.use('/posts', posts_file)
const auth_file = require('./auth')
app.use('/auth', auth_file)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'html', 'index.html'))
})

app.listen(3000, '0.0.0.0')