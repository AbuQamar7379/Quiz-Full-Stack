const express = require("express");
const { roomController } = require("../controllers");
const { auth } = require("../middlewares");
const router = express.Router();

router.post("/create", auth.adminAuth, roomController.createRoom);

module.exports = router;