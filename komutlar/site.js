const Discord = require("discord.js");
const ayarlar = require("../index.js");
const moment = require("moment");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} - Bot Panel `, client.user.avatarURL)

    .setDescription(`[Tıkla](https://kupibot-time.glitch.me/) Kontrol Paneline Git`)

    .setFooter(
      `${message.author.username} Bot Panelini İstedi`,
      message.author.avatarURL
    )
    .setColor(`#ff0000`)
    .setThumbnail(client.user.displayAvatarURL);
  return message.channel.sendEmbed(embed).then(msg => msg.delete(150000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["webpanel"],
  permLevel: 0
};

exports.help = {
  name: "website",
  description: "",
  usage: "website"
};
