// create user router
const express = require('express');
const userRouter = express.Router();
const user = require('../controllers/userController');
//login
userRouter.get("/login", (req,res) => {
    res.render('./views/index.html');
})

userRouter.get("/signup", (req,res) => {
    res.render('./signuppage/signuppage.html')
})

userRouter.get("/home", user.getUserDetails);

module.exports = userRouter;