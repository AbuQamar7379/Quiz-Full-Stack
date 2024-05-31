const { userModel, roomModel } = require("../models");

const getLeaderboardByRoomId = async (roomId) => {
  try {
    if (!(await roomModel.findOne({ roomId }))) {
      throw new Error("Room doesn't exist");
    }
    let user = await userModel.find({ roomId });
    if (!user) {
      throw new Error("No result found by providing id");
    }
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { getLeaderboardByRoomId };
