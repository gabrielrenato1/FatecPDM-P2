require('dotenv').config
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

// Routes

const port = 3001
app.listen(port, () => console.log(`Server online: http://127.0.0.1/${port}`))