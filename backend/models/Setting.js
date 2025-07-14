const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  weatherApiKey: { type: String, default: "" },
});

module.exports = mongoose.model("Setting", settingSchema);
