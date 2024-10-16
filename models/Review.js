const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  gameId: String,
});

module.exports = Review;
