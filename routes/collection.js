const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Collection = require("../models/Collection");
const router = express.Router();

router.post("/games/:id/collection", isAuthenticated, async (req, res) => {
  try {
    const user = req.user;

    const checkCollection = await Collection.findOne({
      gameId: req.params.id,
      userId: user._id,
    });

    const newCollection = new Collection({
      gameId: req.params.id,
      userId: user._id,
    });

    if (checkCollection) {
      res.status(400).json("This game is already in your collection!");
    } else {
      await newCollection.save();
      res.status(200).json(newCollection);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/games/:user/collection", async (req, res) => {
  try {
    // const user = req.user;

    const findGamesId = await Collection.find({
      userId: req.params.user,
    }).populate("userId");

    // console.log(findGamesId);
    if (findGamesId) {
      res.status(200).json(findGamesId);
    } else {
      res.status(200).json("No games saved found");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/games/:id/collection", isAuthenticated, async (req, res) => {
  try {
    const user = req.user;

    const gameToDelete = await Collection.deleteOne({
      gameId: req.params.id,
      userId: user._id,
    });

    // console.log("deleted : ", gameToDelete);

    res.status(200).json(gameToDelete);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
