const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

router.put("/:id/block", async (req, res) => {
  const { id } = req.params;
  const { block } = req.body;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.blocked = block;
  if (block) user.subscribed = false;
  await user.save();
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "User deleted" });
});

module.exports = router;
