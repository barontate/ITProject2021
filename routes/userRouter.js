// create user router
const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const withAuth = require('../config/middleware').withAuth

// Create user router
const userRouter = express.Router()
const user = require('../controllers/userController')

userRouter.post("/api/login", urlencodedParser, user.login);

userRouter.post('/api/signup', urlencodedParser, user.registerUser);

userRouter.get('/api/secret', withAuth, function(req, res) {
    res.send('The password is potato');
});

userRouter.get('/verify', withAuth, function(req, res) {
    res.sendStatus(200);
});

userRouter.get('/home', withAuth, function(req, res) {
    res.send('hello');
})
module.exports = userRouter;