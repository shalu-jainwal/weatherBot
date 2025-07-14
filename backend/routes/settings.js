const express = require("express");
const Setting = require("../models/Setting");
const router = express.Router();

router.get("/", async (req, res) => {
  let settings = await Setting.findOne({});
  if (!settings) {
    settings = new Setting();
    await settings.save();
  }
  res.json(settings);
});

router.put("/", async (req, res) => {
  let settings = await Setting.findOne({});
  if (!settings) {
    settings = new Setting();
  }
  settings.weatherApiKey = req.body.weatherApiKey || settings.weatherApiKey;
  await settings.save();
  res.json(settings);
});

module.exports = router;
