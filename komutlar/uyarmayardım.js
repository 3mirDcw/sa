const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Uyarma Komutları')
.setTimestamp()
.addField('k!uyar','Kullanıcıyı Uyarırsınız.')
.addField('k!uyarı-sil','Kullanıcının Uyarılarından1 Tane Silersiniz')
.addField('k!uyarı-sayı','Uyarılma Sayısına Bakarsınız')
.setFooter('KU-Pİ BOT Uyarı Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['uyarı-sistemi'], 
  permLevel: 0 
};

exports.help = {
  name: 'uyarısistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};