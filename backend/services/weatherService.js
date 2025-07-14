const axios = require("axios");
const User = require("../models/User");
const Setting = require("../models/Setting");

async function sendWeatherUpdates(bot) {
  const settings = await Setting.findOne({});
  if (!settings || !settings.weatherApiKey) {
    console.log("Weather API key not set.");
    return;
  }
  const apiKey = settings.weatherApiKey;
  const city = "Delhi";

  try {
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const weather = weatherRes.data;
    const message = `Weather Update for ${city}:\n${weather.weather[0].description}\nTemperature: ${weather.main.temp} °C\nHumidity: ${weather.main.humidity}%`;

    const users = await User.find({ subscribed: true, blocked: false });
    for (const user of users) {
      bot.sendMessage(user.chatId, message);
    }
    console.log("Weather updates sent to users");
  } catch (error) {
    console.error("Failed to fetch weather:", error.message);
  }
}

module.exports = { sendWeatherUpdates };
