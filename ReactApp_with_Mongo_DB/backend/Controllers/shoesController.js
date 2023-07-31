/** @format */

const { ShoesModel } = require("../Models/shoesModel");

let getShoes = async (req, res) => {
  try {
    let shoes = await ShoesModel.find();
    res.status(200).send(shoes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Search by id
let searchShoes = async (req, res) => {
  let { id } = req.params;
  try {
    let shoe = await ShoesModel.findOne({ _id: id });
    res.status(200).send(shoe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getShoes, searchShoes };
