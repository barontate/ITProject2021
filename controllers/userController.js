const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = process.env.PASSPORT_KEY;

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
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
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
            res.status(200).send("User successfully registered!");
        }
    });
}

module.exports = {
    login,
    registerUser
}