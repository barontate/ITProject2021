// create user router
const express = require('express');
const userRouter = express.Router();

//login
userRouter.get("/login", (req,res) => {
    res.send('<h1>Login</h1>');
})

module.exports = userRouter;