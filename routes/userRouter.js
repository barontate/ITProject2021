// create user router
const express = require('express');
const userRouter = express.Router();
const user = require('../controllers/userController');

userRouter.get("/login", user.getUserDetails);

module.exports = userRouter;