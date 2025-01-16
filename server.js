require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()

app.use(express.json())

connectDB()

// Test Route
app.get('/', (req, res) => {
  res.send('User Management System API is running!')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))