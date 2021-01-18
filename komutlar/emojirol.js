const Discord = require('discord.js');
const db = require('quick.db')
const ayarlarr = require('../index.js')
const ayarlar = ayarlarr.prefix

exports.run = async (client, message,args) => {

let emojirol = await db.fetch(`emoci${message.guild.id}`)
let mesaj = await db.fetch(`mesaj${message.guild.id}`)
let mesajlog = message.mentions.channels.first()
let mensin = message.mentions.roles.first()


const bilgi = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(` > **EmojiRol Sistemini Aktif Etmek İçin:** \`k!emojirol aç\` \n > **EmojiRol Sistemini DeAktif Etmek İçin:**k!emojirol kapat\` \n > **EmojiRol Verilecek Rol'ü Ayarlamak için:** \`k!emojirol rolayarla @roletiket\` \n > **EmojiRol Komutun Kullanılacağı Kanalı Belirtmek İçin:** \`k!emojirol kanalayarla #kanaletiket\` \n > **EmojiRol Mesajını Atmak İçin:** \`k!emojirolbaşlat\` `)
.setFooter(`KU-Pİ BOT`, client.user.avatarURL)

if(!args[0]) return message.channel.send(bilgi);


if(args[0] == 'rolayarla') {
  
  db.set(`emojirol${message.guild.id}`, mensin.id)
  message.channel.send(`EmojiRol Rolü ${mensin} olarak ayarlandı.`)
  
  return
}



if(args[0] == 'kanalayarla') {

db.set(`mesaj${message.guild.id}`, mesajlog.id)
message.channel.send(`EmojiRol ün Çalışacağı Kanal ${mesajlog} olarak ayarlandı.`)

return
}

if(args[0] == 'kapat') {

db.delete(`emoci${message.guild.id}`)
db.set(`emoci${message.guild.id}`, 'Kapalı')
message.channel.send(`EmojiRol Sistemi Kapatıldı.`)

  return
}
  
if(emojirol == 'Açık') {

message.channel.send(`EmojiRol Sistemi Zaten Aktif!`)

return
}

if(args[0] == 'aç') {

db.set(`emoci${message.guild.id}`, 'Açık')
message.channel.send(`EmojiRol Sistemi Açıldı`)

return
}

}




module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: 'emojirol',
};