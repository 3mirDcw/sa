const Discord = require("discord.js");
const ayarlar = require("../index.js");
const moment = require("moment");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} - Botun Oy Verme Sitesi `, client.user.avatarURL)

    .setDescription(`[Oy Vermek İçin](https://top.gg/bot/613168038526713858) Oylarını Bekliyorum ☺️`)

    .setFooter(
      `${message.author.username} Botun Oy Verme Sitesini İstedi`,
      message.author.avatarURL
    )
    .setColor(`#ff0000`)
    .setThumbnail(client.user.displayAvatarURL);
  return message.channel.sendEmbed(embed).then(msg => msg.delete(150000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy-ver'],
  permLevel: 0
};

exports.help = {
  name: "oyver",
  description: "",
  usage: "oyver"
};
