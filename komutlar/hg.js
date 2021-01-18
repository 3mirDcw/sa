const Discord = require('discord.js')
const db = require('quick.db')
const a = require('../index.js')

exports.run = async (client, message, args) => {
if(args[0] === "kapat") {
  
db.delete(`darkcode_${message.guild.id}`)
  
  const bilal = new Discord.RichEmbed()
  .setDescription(`Giriş Çıkış başarıyla kapatıldı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
 
  message.channel.send(bilal)
} 
else {
  

  let darkcode = message.mentions.channels.first();
  
  const darkcodee = new Discord.RichEmbed()
  .setTitle(`**\`GirişÇıkış Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin**: \`k!hoşgeldin #kanal\`\n\n **Kapatmak İçin:** \`k!hoşgeldin kapat\``)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  
  if(!darkcode) return message.channel.send(darkcodee)
  

  db.set(`darkcode_${message.guild.id}`, darkcode.id)
  
  const KUPİ = new Discord.RichEmbed()
  .setDescription(`Giriş çıkış mesajlarının atılacağı kanal **${darkcode}** olarak ayarlandı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  message.channel.send(KUPİ)
  
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hg-bb-ayarla', 'glhl'],
  permLevel: 3,
};

exports.help = {
  name: 'hoşgeldin',  
  description: '',
  usage: ''
};