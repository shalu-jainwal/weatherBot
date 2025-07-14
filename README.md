# Telegram Weather Bot - Admin Panel

This project is a fullstack MERN application for a Telegram bot that sends daily weather updates to subscribed users. It includes a Node.js backend with MongoDB and a React admin panel for managing users and bot settings like API keys.

---

## Features

- **Telegram Bot**
  - Users can subscribe/unsubscribe to daily weather updates using `/start` and `/stop` commands.
  - Sends weather updates automatically every day using a cron job.
  - Blocks/unblocks users from receiving updates.

- **Admin Panel**
  - Manage users (block/unblock/delete).
  - Update bot settings such as OpenWeatherMap API key.
  - Clean and responsive UI built with React and TailwindCSS.

---

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, node-telegram-bot-api, axios, node-cron
- **Frontend:** React.js, TailwindCSS, Axios
- **Others:** dotenv for environment variables, CORS handling

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)
- OpenWeatherMap API key
- Telegram bot token (create bot via BotFather on Telegram)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/telegram-weather-bot.git
   cd telegram-weather-bot

2. Install backend dependencies and setup .env in backend folder:

cd backend
npm install

Create .env file with:

MONGO_URI=your_mongo_connection_string
TELEGRAM_TOKEN=your_telegram_bot_token
PORT=5000

3. Install frontend dependencies:

cd ../frontend
npm install

3. Start backend and frontend servers:

Backend:

npm run dev

Frontend:

    npm run dev

Usage

-  Open the admin panel in your browser (usually at http://localhost:5173).

-  Paste your OpenWeatherMap API key into the settings input and save.

-  Manage users: block, unblock, or delete via the admin panel.

-  Interact with the Telegram bot using /start to subscribe and /stop to unsubscribe.


