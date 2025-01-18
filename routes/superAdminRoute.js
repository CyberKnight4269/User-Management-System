const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware.js')
const {getAllUsers,promoteUsertoSuperAdmin,getUser,updateUser} = require('../controllers/superAdminController.js')

router.get('/users',auth,getAllUsers)
router.put('/promote/:userId',auth,promoteUsertoSuperAdmin)
router.get('/user/:userId',auth,getUser)
router.put('/update/:userId',auth,updateUser)

module.exports = router