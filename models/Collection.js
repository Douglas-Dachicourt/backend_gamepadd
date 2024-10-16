const mongoose = require("mongoose");

const Collection = mongoose.model("Collection", {
  gameId: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Collection;
