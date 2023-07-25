/** @format */

let express = require("express");

let shoesRoute = express.Router();

shoesRoute.get("/", (req, res) => {
  res.send("shoes page");
});

module.exports = { shoesRoute };
