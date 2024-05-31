const mongoose = require("mongoose");
const config = require("./config/config");
const app = require("./app");

mongoose
    .connect(config.mongoUri)
    .then(() => {
        console.log("Mongo DB connected");
        app.listen(config.port, () =>
            console.log("Server running at " + config.port)
        );
    })
    .catch((err) => console.log("Failed to connect DB", err));