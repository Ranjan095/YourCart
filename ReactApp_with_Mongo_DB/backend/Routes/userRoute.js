/** @format */

let express = require("express");
const { UserModel } = require("../Models/userModel");
const bcrypt = require("bcrypt");
const {
  registerUser,
  getusers,
  loginUser,
} = require("../Controllers/userController");

let userRoute = express.Router();

// API for register user
userRoute.post("/register", registerUser);
// API for get all User
userRoute.get("/", getusers);
// API for login user
userRoute.post("/login", loginUser);


module.exports = { userRoute };
