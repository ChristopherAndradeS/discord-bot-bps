const { Client, GatewayIntentBits } = require('discord.js');

console.log("Iniciando bot...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

console.log("Tentando conectar ao Discord...");

client.once("ready", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on("error", (err) => {
  console.error("Erro no client:", err);
});

client.login(process.env.TOKEN).then(() => {
  console.log("Login enviado para Discord");
}).catch(err => {
  console.error("Erro ao logar:", err);
});
console.log("TOKEN carregado:", process.env.TOKEN ? "SIM" : "NÃO");

const http = require("http");

http.createServer((req, res) => {
  res.write("Bot online");
  res.end();
}).listen(process.env.PORT || 3000);