require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
  CLIENT_ORIGIN: "http://localhost:5173",
};
