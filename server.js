require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db.js')
const cors = require('cors')
const authRoutes = require('./routes/authRoute.js')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

// Test Route
app.get('/', (req, res) => {
  res.send('User Management System API is running!')
})

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))