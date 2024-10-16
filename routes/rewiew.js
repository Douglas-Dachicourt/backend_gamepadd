const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post("/games/:id/review", isAuthenticated, async (req, res) => {
  try {
    const user = req.user;

    const checkReview = await Review.findOne({
      author: user._id,
      gameId: req.params.id,
    });

    const newReview = new Review({
      title: req.body.title,
      content: req.body.content,
      author: user._id,
      gameId: req.params.id,
    });
    // console.log(newReview);
    // console.log(req.user);
    // console.log(user);

    if (checkReview) {
      res.status(400).json("You can only add one review on this game");
    } else {
      //   console.log(newReview);

      await newReview.save();
      res.status(200).json({
        _id: newReview._id,
        title: newReview.title,
        content: newReview.content,
        date: newReview.date,
        author: user.username,
      });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/games/:id/review", async (req, res) => {
  try {
    const ReviewId = await Review.find({ gameId: req.params.id }).populate(
      "author"
    );

    // console.log(ReviewId);

    res.status(200).json(ReviewId);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
