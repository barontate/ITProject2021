// create user router
const express = require('express');
const userRouter = express.Router();

//login
userRouter.get("/login", (req,res) => {
    res.render('./loginpage/loginpage.html');
})

userRouter.get("/signup", (req,res) => {
    res.render('./signuppage/signuppage.html')
})

module.exports = userRouter;