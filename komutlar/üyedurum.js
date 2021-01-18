const Discord = require('discord.js');
exports.run = (client, message, params) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.RichEmbed()
.setColor(`BLUE`)
 .setDescription(`

 \**KU-Pİ BOT**\ \__Üye Durum Sistemi__\
`)
.setTimestamp()
.addField(`Üye Durumları`, `**${client.emojis.get('674912239123431425')}${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${client.emojis.get('674912316130590780')}${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${client.emojis.get('674912195397812235')}${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${client.emojis.get('674912273701273600')}${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=613168038526713858&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/sA8uSa9)`)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};