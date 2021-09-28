const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:Number,
    notes:String
})
const C = mongoose.model("User", contactSchema)
module.exports = Contact