const { quizModel, roomModel } = require("../models");

const create = async(question) => {
    try {
        if (!(await roomModel.findOne({ roomId: question.roomId }))) {
            throw new Error("Room not found by given ID, pls enter the correct id");
        }
        let quiz = await quizModel.create(question);
        return quiz;
    } catch (err) {
        throw err;
    }
};

module.exports = { create };