const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  const duration = client.uptime;
  const embed = new Discord.RichEmbed()
    .setAuthor("KU-Pİ BOT Panel", client.user.avatarURL)
    .setTitle("KU-Pİ BOT Panel")
    .setColor("BLACK")
    .setTimestamp()
    .setFooter("© KU-Pİ BOT Panel", client.user.avatarURL)
  .addField("Toplam RAM miktarı", `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`)
 .addField(
      "Kullanılan RAM",
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
    )
    .addField(
      "Bilgi",
      `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${
        client.users.size
      }, Üye! / Shard ID: **Shard Eklenmemiş**
`
    );
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "bot-bilgi",
  description: "taslak",
  usage: "sayac-hg-msg"
};
