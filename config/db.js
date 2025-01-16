const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try
    {
        const mongoURI = process.env.MONGO_URI
        await mongoose.connect(mongoURI)
        console.log('MongoDB connected successfully')
    }
    catch(err)
    {
        console.error('Error connecting to MongoDB:', err.message)
        process.exit(1)
    }
}

module.exports = connectDB