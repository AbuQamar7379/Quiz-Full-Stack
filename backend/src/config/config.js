const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

module.exports = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    xApiKey: process.env.X_API_KEY,
};