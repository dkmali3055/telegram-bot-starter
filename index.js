
const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log("on start");
    if (messageText === '/start') {
      bot.sendMessage(chatId, 'Hello Welcome in starter');
    }
    else if (messageText === '/gettime') {
        bot.sendMessage(chatId, new Date());
    }
    else if (messageText === '/exit') {
        bot.sendMessage(chatId, "Thanks for using starter bot");
    }
  });

bot.setMyCommands([
    {
        command: "/start",
        description: "Using this you can start"
    },
    {
        command: "/gettime",
        description: "Get current time"
    },{
        command: "/exit",
        description: "Exit from bot"
    }
])