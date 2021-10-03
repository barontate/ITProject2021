const mongoose = require("mongoose")
const colours = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'brown']

const tagSchema = new mongoose.Schema({
    name: {type: String, required: true},
    colour: {type: String, enum: colours},
})

const Tag = mongoose.model("Tag", tagSchema)
module.exports = Tag