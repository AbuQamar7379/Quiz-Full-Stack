const httpStatus = require("http-status");
const { roomService } = require("../services");

const createRoom = async(req, res) => {
    try {
        let room = await roomService.create(req.body);
        return res.status(httpStatus.CREATED).send(room);
    } catch (err) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: err.message });
    }
};

module.exports = { createRoom };