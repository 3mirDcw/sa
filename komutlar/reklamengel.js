const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../index.js')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Buna yetkin yok!`);
  if (!args[0]) return message.channel.send(`aç veya kapat yazmalısın. \`${ayarlar.prefix}reklamkoruma aç\``)
let kufur = await db.fetch(`kufur_${message.guild.id}`)
  if (args[0] == 'aç') {
if (kufur) {
message.channel.send('✔️Reklam Koruması Zaten Aktif!')
return
} 
else {
    db.set(`kufur_${message.guild.id}`, 'Açık')
     message.channel.send('✔️Reklam filtresi başarıyla açıldı!')
}
  }
  else if (args[0] == 'kapat') {
    db.delete(`kufur_${message.guild.id}`, 'Kapalı')
      message.channel.send('✔️Reklam Filtresi başarıyla kapatıldı!')
  }

}
//CodeFENIX
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklam-koruma"],
  permLevel: 3
};
// CodeFENIX
exports.help = {
  name: 'reklam-engelle',
  description: 'CFX',
  usage: 'reklamkoruma'
};