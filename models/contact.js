const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    email: { type: String},
    notes: {type: String},
})

const Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact