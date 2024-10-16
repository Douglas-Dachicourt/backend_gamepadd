const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  try {
    const headerGiven = req.headers.authorization;

    if (!headerGiven || !headerGiven.startsWith("Bearer ")) {
      res.status(400).json("Missing or invalid token");
    }

    const headerToken = headerGiven.replace("Bearer ", "");

    const user = await User.findOne({ token: headerToken });

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json("Unauthorized access");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = isAuthenticated;
