const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    genre: {
        type:Array
    },
     rating: {
        type: Number
    }
})

module.exports = mongoose.model("Movie", movieSchema)