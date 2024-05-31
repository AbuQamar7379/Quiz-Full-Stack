const express = require("express");
const quizRouter = require("./quiz.routes");
const roomRouter = require("./room.routes");
const userRouter = require("./user.routes");
const leaderboardRouter = require("./leaderboard.routes");
const router = express.Router();

router.use("/quiz", quizRouter);
router.use("/room", roomRouter);
router.use("/user", userRouter);
router.use("/leaderboard", leaderboardRouter);

module.exports = router;
