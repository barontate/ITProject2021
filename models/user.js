const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    contacts: [{type: mongoose.Schema.Types.ObjectId, ref: 'contacts'}],
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tags'}],
})

// Hash password
userSchema.pre('save', function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

// Check if password is correct to login.
userSchema.methods.validPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

const User = mongoose.model("User", userSchema)
module.exports = User