const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('k!seviye','Seviyenizi atar.')
.addField('k!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('k!seviye-aç','Seviye Sistemini açarsınız.')
.addField('k!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('k!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('k!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('k!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('KU-Pİ BOT Seviye Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviyesistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};