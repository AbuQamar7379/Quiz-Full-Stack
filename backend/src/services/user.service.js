const { userModel, quizModel } = require("../models");

const submit = async (user) => {
  try {
    if (!(await quizModel.findOne({ roomId: user.roomId }))) {
      throw new Error("Room doesn't exist!");
    }

    let newUser;
    let userExist = await userModel.findOne({ username: user.username });
    if (userExist) {
      newUser = userExist;
    } else {
      newUser = new userModel(user);
    }
    let quizQuestion = await quizModel.findOne({ roomId: newUser.roomId });
    let question = quizQuestion.options;
    for (let i = 0; i < question.length; i++) {
      if (
        question[i].ans === newUser.optionSelected.ans &&
        question[i].isTrue === newUser.optionSelected.isTrue
      ) {
        newUser.points += 100;

        let quiz = await quizModel.findOneAndUpdate({ roomId: newUser.roomId });
        quiz.isCompleted = true;
        await quiz.save();
      }
    }
    return await newUser.save();
  } catch (err) {
    throw err;
  }
};
module.exports = { submit };
