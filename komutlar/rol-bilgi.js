const Discord = require("discord.js");
const superagent = require("superagent");
//CFX //CodeLib
exports.run = async (client, message, args) => {
  let rolz = message.content.split(" ").slice(1).join(" ");
  let role = message.mentions.roles.first()
  if (!role) return message.channel.send("Bir rol etiketlemelisin.");
  
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  
  var cfx = new Discord.RichEmbed()
  .setAuthor('KU-Pİ', client.user.avatarURL)
  .addField('Rol İsmi', role.name, true)
  .addField('Rol ID', role.id, true)
  .addField('Role Sahip Kullanıcı Sayısı', role.members.size, true)
  .addField('Etiketleme', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('Oluşturulduğu Tarih', moment(role.createdAt).format("LL"), true)
  .addField('Renk', role.hexColor, true)
  .setColor(0x00ff88)
  message.channel.send(cfx)
}
//CFX //CodeLib
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
//CFX //CodeLib
exports.help = {
  name: 'rolbilgi',
  description: 'CFX, rol hakkında bilgiler verir.',
  usage: 'rolbilgi <@rol>'
};