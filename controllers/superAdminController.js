const User = require('../models/user')

const getAllUsers = async(req,res) => {
    if(!req.user.isSuperAdmin) return res.status(401).json({message: 'Unauthorized Access'})
    try
    {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(err)
    {
        res.status(500).json({message: 'Error fetching all the user data', error:err.message})
    }
}

const promoteUsertoSuperAdmin = async(req,res) => {
    if(!req.user.isSuperAdmin) return res.status(401).json({message: 'Unauthorized Access'})
    try
    {
        const {userId} = req.params
        const user = await User.findByIdAndUpdate(userId, {isSuperAdmin: true}, {new: true})
        if(!user) res.status(404).json({message: 'User not found'})
        else res.status(200).json({message: 'User promoted to Super Admin', user})
    }
    catch(err)
    {
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

const getUser = async(req,res) => {
    if(!req.user.isSuperAdmin) return res.status(401).json({message: 'Unauthorized Access'})
    try
    {
        const {userId} = req.params
        const user = await User.findById(userId)
        if(!user) res.status(404).json({message: 'User not found'})
        else res.status(200).json(user)
    }
    catch(err)
    {
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

const updateUser = async(req,res) => {
    if(!req.user.isSuperAdmin) return res.status(401).json({message: 'Unauthorized Access'})
    try
    {
        const details = req.body
        const {userId} = req.params
        const user = await User.findById(userId)
        if(!user) return res.status(404).json({message: 'User not found'})
        Object.assign(user,details)
        await user.save()
        return res.status(200).json({message: 'Details Updated', user})
    }
    catch(err)
    {
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

module.exports = {getAllUsers,promoteUsertoSuperAdmin,getUser,updateUser}