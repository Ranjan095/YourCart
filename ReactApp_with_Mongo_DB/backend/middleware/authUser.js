/** @format */
let jwt = require("jsonwebtoken");
let authUser = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      var decoded = jwt.verify(token.split(" ")[1], "masai");
      if (decoded) {
        console.log(decoded);
        req.body.author = decoded.author;
        req.body.authorId = decoded.authorId;
        next();
      } else {
        res.status(400).send({ msg: "Please login first" });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(400).send({ msg: "Please login first" });
  }
};
module.exports = { authUser };
