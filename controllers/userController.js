const User = require('../models/user')

const viewDetails = async(req,res) => {
    try
    {
        const user = await User.findById(req.user.id)
        if (!user) return res.status(404).json({ message: 'User not found' })
        if(!user.isActive) return res.status(403).json({message: 'This account has been deactivated'})
        else res.status(200).json({name: user.name, email: user.email, phoneNumber: user.phoneNumber})
    }
    catch(error)
    {
        res.status(500).json({ message: 'Server Error', error: error.message })
    }
}

const updateDetails = async(req,res) => {
    const details = req.body
    try
    {
        const user = await User.findById(req.user.id)
        if(!user) return res.status(404).json({ message: 'User not found' })
        if(!user.isActive) return res.status(403).json({message: 'This account has been deactivated'})
        Object.assign(user,details)
        await user.save()
        res.status(200).json({name: user.name, email: user.email, phoneNumber: user.phoneNumber})
    }
    catch(err)
    {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}

const deactivateProfile = async(req,res) => {
    const user = await User.findByIdAndUpdate(req.user.id, {isActive: false}, {new:true})
    if(!user) return res.status(404).json({ message: 'User not found' })
    else res.status(200).json({message: 'Profile Deactivated',user})
}

module.exports = {viewDetails,updateDetails,deactivateProfile}