const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', function() {
  console.log('Logged in as ${client.user.username}!');
});

client.on('message', function(msg) {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MjQ3NDkxNzI4NDczNDU2NjQw.Czs3fQ.iN44TSmRK-jwHWvluQCDy2O-vGk');