const User = require('../models/user')

const registerUser = async (req, res) => {
    const {name,email,password,phoneNumber} = req.body
    try
    {
        const userExists = await User.findOne({email})
        if (userExists) return res.status(400).json({ message: 'User already registered'})
        const newUser = new User({
        name,
        email,
        password,
        phoneNumber,
        })
        await newUser.save()    //for hashing
        const token = newUser.generateAuthToken()
        const refreshToken = newUser.generateRefreshToken()
        res.status(201).json({
            message: 'User registered successfully',
            token,
            refreshToken
        })
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
}

const loginUser = async (req, res) => {
    const {email,password} = req.body
    try
    {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'Invalid email' })
        const isMatch = await user.matchPassword(password)
        if (!isMatch) return res.status(400).json({ message: 'Password incorrect' })
        const token = user.generateAuthToken()
        const refreshToken = user.generateRefreshToken()
        res.status(200).json({
        message: 'Login successful',
        token,
        refreshToken
        })
    }
    catch(err)
    {
        res.status(500).json({ message: 'Error logging in', error: err.message })
    }
}

module.exports = {registerUser,loginUser}
