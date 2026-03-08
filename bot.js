const { Client, GatewayIntentBits } = require("discord.js");

console.log("Iniciando bot...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {

  console.log("Mensagem:", message.content);

  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Pong 🚀");
  }

});

console.log("Tentando login no Discord...");

client.login(process.env.TOKEN).catch(console.error);

require("http")
.createServer((req,res)=>{
  res.end("Bot rodando");
})
.listen(process.env.PORT || 3000);