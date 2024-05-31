const httpStatus = require("http-status");
const { quizService } = require("../services");

const createQuiz = async(req, res) => {
    try {
        let quiz = await quizService.create(req.body);
        return res.status(httpStatus.CREATED).send(quiz);
    } catch (err) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: err.message });
    }
};

module.exports = { createQuiz };