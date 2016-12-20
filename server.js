var Discord = require('discord.io');
var bot = new Discord.Client({
    token: "MjQ3NDkxNzI4NDczNDU2NjQw.Czs3fQ.iN44TSmRK-jwHWvluQCDy2O-vGk",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});