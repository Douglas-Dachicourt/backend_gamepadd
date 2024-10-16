const express = require("express");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const User = require("../models/User");

const router = express.Router();

router.post("/user/login", async (req, res) => {
  try {
    const emailGiven = req.body.email;
    const passwordGiven = req.body.password;

    const existingUser = await User.findOne({ email: emailGiven });

    if (existingUser) {
      const newHash = SHA256(passwordGiven + existingUser.salt).toString(
        encBase64
      );
      if (newHash === existingUser.hash) {
        res.status(200).json({
          _id: existingUser._id,
          token: existingUser.token,
          account: {
            username: existingUser.username,
          },
        });
      } else {
        res.status(400).json("Password is invalid, please retry!");
      }
    } else {
      res.status(400).json("This user does not exists");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
