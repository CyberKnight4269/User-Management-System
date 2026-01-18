require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db.js')
const cors = require('cors')
const authRoute = require('./routes/authRoute.js')
const userRoute = require('./routes/userRoute.js')
const superAdminRoute = require('./routes/superAdminRoute.js')

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

// Test Route
app.get('/', (req, res) => {
  res.send('User Management System API is running!')
})

app.use('/api/auth', authRoute)
app.use('/api/user',userRoute)
app.use('/api/admin',superAdminRoute)

module.export = app