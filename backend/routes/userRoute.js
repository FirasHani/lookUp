const express = require('express')
const router = express.Router()
const {registerUser,
    loginUser,getMe,
    forgetPaswword,testGet,testPost}=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')


router.post('/users/registerUser',registerUser)
router.post('/users/loginUser',loginUser)
router.post('/users/forgetPaswword',forgetPaswword)
router.get('/users/me',getMe)
router.get('/users/testGet/:id/:token',testGet)
router.post('/users/testPost/:id/:token',testPost)

module.exports = router
