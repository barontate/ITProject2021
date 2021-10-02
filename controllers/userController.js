const mongoose = require('mongoose')
const User = require('../models/user')
const Contact = require('../models/contact')
const jwt = require('jsonwebtoken')
const secret = process.env.PASSPORT_KEY

const login = function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        user.validPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true }).redirect('/home');
          }
        });
      }
    });
}

const registerUser = function (req, res) {
  const {firstName, lastName, userName, email, password} = req.body;
  const user = new User({firstName, lastName, userName, email, password});
  user.save(function(err) {
    if (err) {
      res.status(500).send("Error registering user please try again.");
    }
    else {
      // Issue token
      const payload = { email };
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });
      res.cookie('token', token, { httpOnly: true }).status(200).redirect('/home');
    }
  });
}

// Contacts
const addContact = async function (req, res) {
  try {
    const {firstName, lastName, email, notes} = req.body
    const contact = new Contact({firstName, lastName, email, notes})
    let user =  await User.findOne({email: req.email})
    if (!user.contacts.includes(contact._id.toString())) {
      user.contacts.push(contact._id.toString())
    }
    contact.save()
    user.save()
    return res.redirect('/home')
  } catch (err) {
    return res.stauts(400).send('Database query failed')
  }
}

const removeContact = async function (req, res) {
  try {
    const contactID = req.body.contactID;
    let user = await User.findOne({email: req.email})
    if (user.contacts.includes(contactID)) {
      const index = user.contacts.indexOf(contactID)
      user.contacts.splice(index, 1)
      user.save()  
    }
    let contact = await Contact.findByIdAndRemove(contactID)
    return res.redirect('/home')
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

module.exports = {
    login,
    registerUser,
    addContact,
    removeContact
}