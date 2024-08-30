const express = require('express')
const {loginPage , dashboardPage , loginCheck} = require('../Controllers/userController')
const router = express.Router()


router.get('/',loginPage)
router.get('/dashboard',dashboardPage)
router.post('/login',loginCheck)

module.exports = router