const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    email:String
})
const User = mongoose.model("User", userSchema)
module.exports = User