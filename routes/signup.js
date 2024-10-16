const express = require("express");
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const User = require("../models/User");

const router = express.Router();

router.post("/user/signup", async (req, res) => {
  const password = req.body.password;
  const salt = uid2(16);
  const hash = SHA256(password + salt).toString(encBase64);
  const token = uid2(64);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      salt: salt,
      hash: hash,
      token: token,
    });
    //   console.log(newUser);

    const checkUsername = await User.findOne({ username: req.body.username });
    const checkEmail = await User.findOne({ email: req.body.email });

    if (checkEmail) {
      res.status(400).json("Sorry, this email already exists");
    } else if (checkUsername) {
      res.status(400).json("Sorry, this username already exists");
    } else if (password.length < 8) {
      res.status(400).json("Password must be 8 characters long at least");
    } else {
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        token: newUser.token,
        account: {
          username: newUser.username,
        },
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
