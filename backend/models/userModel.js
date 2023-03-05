const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    isAdmain:{
      type:Boolean,
      default:false,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)