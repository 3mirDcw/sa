const Discord = require("discord.js");
const db = require(`quick.db`)
exports.run = async (client, message, args) => {
let e = args[0]
let n = message.mentions.users.first()
if(!e) return message.channel.send(`Puan eklemem için k!puan-ekle <sayı> @kullanıcı`)
 if(!n) return message.channel.send(`Etiket`)
db.add(`goldpuan_${n.id}`, e)
message.channel.send(`<@${n.id}> a ${e} kadar puan eklendi`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5,
  kategori: "moderasyon"
};

exports.help = {
  name: "puan-ekle",
  description: "Made by Enis",
  usage: "puan-ekle"
};
 