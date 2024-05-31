const express = require("express");
const { userController } = require("../controllers");
const router = express();

router.post("/submit", userController.submitQuiz);

module.exports = router;