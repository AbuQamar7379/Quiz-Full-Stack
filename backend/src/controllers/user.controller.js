const httpStatus = require("http-status");
const { userService } = require("../services");

const submitQuiz = async (req, res) => {
  try {
    let user = await userService.submit(req.body);
    return res.status(httpStatus.CREATED).send(user);
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: err.message });
  }
};

module.exports = { submitQuiz };
