const httpStatus = require("http-status");
const { leaderboardService } = require("../services");

const getLeaderboard = async (req, res) => {
  try {
    let { roomId } = req.params;
    let result = await leaderboardService.getLeaderboardByRoomId(roomId);
    return res.status(httpStatus.OK).send(result);
  } catch (err) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: err.message });
  }
};

module.exports = { getLeaderboard };
