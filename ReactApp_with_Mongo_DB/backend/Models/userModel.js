/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.ObjectId,ref:"" }],
    addrss: [{ type: mongoose.Schema.ObjectId }],
    wishlist: [{ type: mongoose.Schema.ObjectId }],
    image: { type: String },
  },
  { versionKey: false }
);

let UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
