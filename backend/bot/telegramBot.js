const TelegramBot = require("node-telegram-bot-api");
const User = require("../models/User");

function setupBot(token) {
  const bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    let user = await User.findOne({ chatId });
    if (!user) {
      user = new User({ chatId, subscribed: true });
      await user.save();
    } else {
      user.subscribed = true;
      user.blocked = false;
      await user.save();
    }
    bot.sendMessage(
      chatId,
      "Welcome! You are subscribed to daily weather updates. Use /stop to unsubscribe."
    );
  });

  bot.onText(/\/stop/, async (msg) => {
    const chatId = msg.chat.id;
    const user = await User.findOne({ chatId });
    if (user) {
      user.subscribed = false;
      await user.save();
      bot.sendMessage(
        chatId,
        "You have unsubscribed from daily weather updates."
      );
    } else {
      bot.sendMessage(chatId, "You are not subscribed.");
    }
  });

  bot.onText(/\/help/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      "Commands:\n/start - subscribe\n/stop - unsubscribe"
    );
  });

  return bot;
}

module.exports = { setupBot };
