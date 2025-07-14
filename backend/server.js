const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const { setupBot } = require("./bot/telegramBot");
const { sendWeatherUpdates } = require("./services/weatherService");
const userRoutes = require("./routes/users");
const settingsRoutes = require("./routes/settings");
const { PORT, MONGO_URI, TELEGRAM_TOKEN, CLIENT_ORIGIN } = require("./config");

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const bot = setupBot(TELEGRAM_TOKEN);

cron.schedule("0 8 * * *", () => {
  console.log("Running daily weather update...");
  sendWeatherUpdates(bot);
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/settings", settingsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
