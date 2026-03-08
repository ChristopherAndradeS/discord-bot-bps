const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', message => {

  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Pong 🚀");
  }

});

client.login(process.env.TOKEN);

const http = require("http");

http.createServer((req, res) => {
  res.write("Bot online");
  res.end();
}).listen(process.env.PORT || 3000);