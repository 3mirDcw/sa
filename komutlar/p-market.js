const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.RichEmbed()
      .setTimestamp()
      .setAuthor("KU-Pİ BOT", client.user.avatarURL)
      .setColor("BLUE")
      .setTitle("KU-Pİ BOT")
      .setURL("https://bit.ly/2Hrowq8")

      .setDescription(
        `
${message.author}, senin puanın **0**
daha fazla puan kazanmak için k!p-menü yazabilirsin.
`
      )
      .addField(
        "k!puanım | k!p-market",
        `
Puanınızı ve market menüsünü gösterir.

`
      )
      .addField(
        "k!gümuşkasa",
        `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`
      )

      .addField(
        "k!altın",
        `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`
      )

      .addField(
        "k!elmaskasa",
        `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`
      )
      .setFooter("© KU-Pİ BOT", client.user.avatarURL);

    return message.channel.send(Embed);
  }
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("KU-Pİ BOT", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("KU-Pİ BOT")
    .setURL("https://bit.ly/2Hrowq8")

    .setDescription(
      `
${message.author}, senin puanın **${db.fetch(`goldpuan_${message.author.id}`)}**
daha fazla puan kazanmak için k!p-menü yazabilirsin.
`
    )
    .addField(
      "k!puanım | k!p-market",
      `
Puanınızı ve market menüsünü gösterir.

`
    )
    .addField(
      "k!gümüşkasa",
      `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`
    )

    .addField(
      "k!altınkasa",
      `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`
    )

    .addField(
      "k!elmaskasa",
      `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`
    )
    .setFooter("© KU-Pİ BOT", client.user.avatarURL);

  return message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmarket", "pmenü", "pmenu", "p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: "p-market",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
