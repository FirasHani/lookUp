const express = require('express')
const router = express.Router()

const{searchMoive}=require('../controllers/searchMoive')



router.post('/searchMoive',searchMoive)
router.get('/searchMoive',searchMoive)

module.exports = router