const config = require("../config/config");
const httpStatus = require("http-status");

const adminAuth = (req, res, next) => {
    let headers = req.headers;
    if (headers["x-api-key"] !== config.xApiKey) {
        return res
            .status(httpStatus.UNAUTHORIZED)
            .send({ messgae: "Unauthorized acces" });
    }

    next();
};

module.exports = { adminAuth };