/** @format */

let express = require("express");
const { ShoesModel } = require("../Models/shoesModel");
const { searchShoes, getShoes } = require("../Controllers/shoesController");
const { authUser } = require("../middleware/authUser");

let shoesRoute = express.Router();
// API for get All Shoes
shoesRoute.get("/", authUser, getShoes);

// API for searching shoes by id
shoesRoute.get("/:id", authUser, searchShoes);

module.exports = { shoesRoute };
