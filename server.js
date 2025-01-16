require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')

const app = express()

app.use(express.json())

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err))

// Test Route
app.get('/', (req, res) => {
  res.send('User Management System API is running!')
})

// Start Server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))