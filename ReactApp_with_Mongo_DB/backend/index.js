/** @format */

let express = require("express");
const { shoesRoute } = require("./Routes/shoesRoute");
const { userRoute } = require("./Routes/userRoute");
const { connection } = require("./db");
require("dotenv").config();
let app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/shoes", shoesRoute);

app.get("/", (req, res) => {
  res.send({ msg: "home page" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`DB has been connected`);
  } catch (error) {
    console.log(`DB has not been connected`);
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
