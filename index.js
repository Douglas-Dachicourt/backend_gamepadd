const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const reviewRoute = require("./routes/rewiew");
const collectionRoute = require("./routes/collection");

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use(signupRoute);
app.use(loginRoute);
app.use(reviewRoute);
app.use(collectionRoute);

app.all("*", (req, res) => {
  res.status(400).json("This route does not exists");
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
