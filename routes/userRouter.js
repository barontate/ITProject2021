// create user router
const express = require('express');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const withAuth = require('../config/middleware');

//Create user router
const userRouter = express.Router();
const user = require('../controllers/userController');

userRouter.get("/login", (req, res) => {
    res.send('hello');
});

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