const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  chatId: { type: Number, required: true, unique: true },
  blocked: { type: Boolean, default: false },
  subscribed: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", userSchema);
