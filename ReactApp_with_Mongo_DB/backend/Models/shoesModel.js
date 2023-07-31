/** @format */

let mongoose = require("mongoose");

let shoesSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  images: { type: [String], required: true },
  brand: {
    type: String,
    enum: ["adidas", "campus", "action", "puma"],
    required: true,
  },
  category: { type: String, enum: ["men", "women", "kids"], required: true },
  size: { type: [Number], enum: [3, 4, 5, 6, 7, 8, 9], required: true },
  mrp: { type: Number, required: true },
  sp: { type: Number, required: true },
  rating: { type: Number, required: true },
  offer: { type: Number, required: true },
  color: {
    type: [String],
    enum: ["white", "grey", "black", "red"],
    required: true,
  },
  discription: { type: String, required: true },
});

let ShoesModel = mongoose.model("shoes", shoesSchema);

module.exports = { ShoesModel };
