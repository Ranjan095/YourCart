/** @format */

const { UserModel } = require("../Models/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// for register user
let registerUser = async (req, res) => {
  let { name, email, password, cart, address, wishlist, image } = req.body;
  let checkUser = await UserModel.findOne({ email });
  if (checkUser) {
    res
      .status(400)
      .send({ msg: `You have already registered with this email ${email}` });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (hash) {
          let newUser = new UserModel({
            name,
            email,
            password: hash,
            cart,
            address,
            wishlist,
            image,
          });
          await newUser.save();
          res
            .status(200)
            .send({ msg: "Your account has been created successfully" });
        } else {
          res.status(400).send(err);
        }
      });
    } catch (error) {
      res.status(400).send({ err: error.message });
    }
  }
};

// for get all users
let getusers = async (req, res) => {
  try {
    let users = await UserModel.find(); //.populate();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// for login
let loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  if (user) {
    try {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign(
            { author: user.name, emai: user.emai, authorId: user._id },
            "masai"
          );
          res.status(200).send({ msg: "Login successful", token,author:user.name });
        } else {
          res.status(400).send({ msg: "!sory wrong credentials" });
        }
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res
      .status(400)
      .send({ msg: `sorry you have  not registered with this email ${email}` });
  }
};

module.exports = { registerUser, getusers, loginUser };
