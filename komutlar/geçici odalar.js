const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  let aktifkanallar = []
  message.guild.members.forEach(m => {
  if (db.has(`geciciKanalK_${m.id}`) == true) {
    aktifkanallar.push(`<@${m.id}>`)
  }
  })
  
  const embed = new Discord.RichEmbed()
  .setColor("2F3136")
  .setAuthor(client.user.tag, client.user.avatarURL)
  .setTitle(message.guild.name + "Adlı Sunucudaki Geçici Odalarda Bulunan Üyeler")
  .setDescription(`${aktifkanallar.join('\n')}`)
  .setTimestamp()
  .setFooter(client.user.tag, message.guild.iconURL)
  message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçiciodalar'],
  permLevel: 0
};

module.exports.help = {
  name: 'geçici-odalar',
  description: '',
  usage: '',
      'kategori':'Geçici Oda Sistemi'

};