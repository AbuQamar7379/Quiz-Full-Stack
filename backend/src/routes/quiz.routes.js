const express = require("express");
const { quizController } = require("../controllers");
const router = express.Router();

router.post("/create", quizController.createQuiz);

module.exports = router;