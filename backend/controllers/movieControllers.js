const asyncHandler = require('express-async-handler')
const Movie=require('../models/moiveModel')
const { param } = require('../routes/userRoute')


// @desc showMovies
// @route GET/api/showMovies
// @access privite
const showMovies=asyncHandler(async(req,res)=>{
    const showMovies=await Movie.find()
    res.json(showMovies)
})

// @desc addNewMovie
// @route POST/api/showMovies
// @access privite
const addNewMovie=asyncHandler(async(req,res)=>{

try{
    const{name,year,rating,genre}=req.body
    
    const movie=await Movie.create({
        name,
        year,
        rating,
        genre
 
    })

}catch(error){
    res.json(error)
}
})

// @desc editMovie
// @route PUT/api/showMovies
// @access privite

const editMovie=asyncHandler(async(req,res)=>{

    try {
        await Movie.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        })
        res.json("done")
    } catch (error) {
        console.log(error)
    }
//    const test= await Movie.findById({_id:req.params.id})
//     console.log(test)
})

// @desc deleteMovie
// @route PUT/api/showMovies
// @access privite

const deleteMovie=asyncHandler(async(req,res)=>{
    try {
        await Movie.findByIdAndDelete({_id:req.params.id})
    } catch (error) {
        
    }
})


module.exports = {
    showMovies,
    addNewMovie,
    editMovie,
    deleteMovie
  }