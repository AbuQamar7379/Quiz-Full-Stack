const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    roomId: {
        type: Number,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const roomModel = mongoose.model("room", roomSchema);

module.exports.roomModel = roomModel;