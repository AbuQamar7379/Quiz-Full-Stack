const express = require("express");
const { leaderboardController } = require("../controllers");
const router = express.Router();

router.get("/:roomId", leaderboardController.getLeaderboard);

module.exports = router;
