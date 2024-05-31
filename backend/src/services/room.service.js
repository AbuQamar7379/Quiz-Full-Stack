const { roomModel } = require("../models");

const create = async(room) => {
    try {
        if (await roomModel.findOne({ roomId: room.roomId })) {
            throw new Error("Room already exist");
        }
        let quiz = await roomModel.create(room);
        return quiz;
    } catch (err) {
        throw err;
    }
};

module.exports = { create };