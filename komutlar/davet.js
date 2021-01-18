const Discord = require("discord.js");
const db = require("quick.db");
const Jimp = require("jimp");

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
    .setAuthor("KU-Pİ", client.user.avatarURL)
    .setTitle("KU-Pİ BOT")
    .setURL("https://bit.ly/2Hrowq8")
    .setDescription("Botu kendi sunucuna davet edebilirsin :)")
    .setColor("BLUE")
    .setTimestamp()
    .setFooter("© KU-Pİ BOT", client.user.avatarURL)
    .addField(["Davet Linki"], "https://bit.ly/2Hrowq8");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "taslak",
  usage: "sayac-hg-msg"
};
