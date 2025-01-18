const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware.js')
const {viewDetails,updateDetails,deactivateProfile} = require('../controllers/userController.js')

router.get('/profile', auth,viewDetails)
router.put('/update',auth,updateDetails)
router.patch('/deactivate',auth,deactivateProfile)

module.exports = router