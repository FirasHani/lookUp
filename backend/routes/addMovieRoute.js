const express = require('express')
const router = express.Router()
const{showMovies,addNewMovie,editMovie,deleteMovie

}=require('../controllers/movieControllers')

const{protectAdmin,protect}=require('../middleware/authMiddleware')

router.get('/moive/showMovies',protectAdmin,showMovies)

router.post('/moive/addNewMovie',addNewMovie)
router.put('/moive/editMovie/:id',editMovie)
router.delete('/movie/deleteMovie/:id',deleteMovie)





module.exports = router