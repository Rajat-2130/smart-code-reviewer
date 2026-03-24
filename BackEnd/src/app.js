const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

const cors = require("cors");

app.use(cors({
  origin: "*", // later replace with frontend URL
}));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app