const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("KU-Pİ BOT", client.user.avatarURL)
.setColor("BLUE")
.setTitle("KU-Pİ BOT")
 .setURL("https://bit.ly/2Hrowq8")

 .setDescription(`
${message.author}, senin puanın: **0**
`)
 .addField("k!p-menu | k!p-market", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField("k!günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
`)
 
 .setFooter("© KU-Pİ BOT", client.user.avatarURL)
 
 return message.channel.send(Embed)
  }
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("KU-Pİ BOT", client.user.avatarURL)
.setColor("BLUE")
.setTitle("KU-Pİ BOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")

 .setDescription(`
${message.author}, senin puanın **${db.fetch(`goldpuan_${message.author.id}`)}**
`)
 .addField("k!pmenü", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField("k!günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
`)
 
 .setFooter("© KU-Pİ BOT", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmenu","p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: "pmenü",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
