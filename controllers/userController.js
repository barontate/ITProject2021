const mongoose = require('mongoose')
const User = require('../models/user')
const Contact = require('../models/contact')
const Tag = require('../models/tag')
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
            res.cookie('token', token).json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        });
      }
    });
}

const logout = function (req, res) {
  console.log('here')
  try {
    return res.clearCookie('token').redirect('/')
  } catch (err) {
    console.log(err)
  }
}

const registerUser = function (req, res) {
  const {firstName, lastName, userName, email, password} = req.body;
  const user = new User({firstName, lastName, userName, email, password});
  user.save(function(err) {
    if (err) {
      res.status(500).json({email: "Error registering user please try again."});
    }
    else {
      // Issue token
      const payload = { email };
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });
      res.cookie('token', token).json({
        success: true,
        token: `Bearer ${token}`
      });
    }
  });
}
 
// Contacts
const addContact = async function (req, res) {
  try {
    const {firstName, lastName, email, notes} = req.body
    const contact = new Contact({firstName, lastName, email, notes})
    let user =  await User.findOne({email: req.email})
    if (!user.contacts.includes(contact._id)) {
      user.contacts.push(contact._id)
    }
    contact.save()
    user.save()
    return res.json({
      message: 'Contact successfully added!',
      contactID: contact._id
    });
  } catch (err) {
    console.log(err)
    return res.status(400).send('Database query failed')
  }
}

const editContact = async function (req, res) {
  try {
    const {firstName, lastName, email, notes, contactID} = req.body
    const update = {firstName: firstName, lastName: lastName, email: email, notes: notes}
    let contact = await Contact.findByIdAndUpdate(contactID, update)
    contact.save()
    return res.redirect('/home')
  } catch (err) {
    return res.status(400).send('Database query failed')
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
    return res.json({
      message: 'Contact successfully deleted!',
      contactID: contactID
    });
  } catch (err) {
    console.log(err)
    return res.status(400).send(err.message)
  }
}

const getContacts = async function (req, res) {
  try {
    let user = await User.findOne({email: req.email})
    let contactIDs = user.contacts
    var contacts = []
    for (var i = 0; i < contactIDs.length; i++) {
      let contact = await Contact.findById(contactIDs[i])
      contacts.push(contact)
    }
    contacts.sort(function (a, b) {
      var first = a.firstName.toLowerCase()
      var second = b.firstName.toLowerCase()
      if (first > second) {
        return 1
      }
      else if (first < second) {
        return -1
      }
      else if (first === second) {

        if (firstLast > secondLast) {
          console.log(firstLast, secondLast)
          return 1
        }
        else if (firstLast < secondLast) {
          return -1
        }
        return 0
      }
    })
    return res.json(contacts)
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

// Tags
const addTag = async function (req, res) {
  try {
    const {name, colour, contactID} = req.body
    var tagID = req.body.tagID
    let contact = await Contact.findById(contactID)
    let user = await User.findById({email: req.email})
    if (tagID == null) {
      const tag = new Tag({name, colour})
      tagID = tag._id
      tag.save()
    }
    if (!contact.tags.includes(tagID)) {
      contact.tags.push(tagID)
    }
    contact.save()
    if (!user.tags.includes(tagID)) {
      user.tags.push(tagID)
    }
    user.save()
    return res.redirect('/home')
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

const removeTag = async function (req, res) {
  try {
    const {contactID, tagID} = req.body
    let contact = await Contact.findById(contactID)
    if (contact.tags.includes(tagID)) {
      const index = contact.tags.indexOf(tagID)
      contact.tags.splice(index, 1)
      contact.save()
    }
    let tag = await Tag.findByIdAndRemove(tagID)
    return res.redirect('/home')
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

module.exports = {
    login,
    logout,
    registerUser,
    addContact,
    editContact,
    removeContact,
    getContacts,
    addTag,
    removeTag
}