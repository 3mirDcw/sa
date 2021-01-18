const Discord = require('discord.js');
const ayarlar = require('../index.js');
const db = require("quick.db");

exports.run = async function(client, message, args) {
  // DEĞİŞKENLER //
  const üye = message.mentions.members.first();

  
  // EMBEDLER //
  const hataembed = new Discord.RichEmbed()
    .setTitle("Hata")
    .setColor("RED")
    .setFooter(`KU-Pİ BOT Gold Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(!üye) {
    const sorgulama = new Discord.RichEmbed()
      .setTitle(`${message.author.username} Gold Sorgulama`)
      .setColor("BLUE")
      .setFooter("KU-Pİ BOT Gold Sistemi")
      .setTimestamp()
    const sorgu = await db.fetch(`goldsure_${message.author.id}`);
    if(!sorgu) {
      sorgulama.description = `${message.author} adlı kullanıcı bir gold üye değil.`;
      message.channel.send({embed: sorgulama})
    }
    else {
      sorgulama.description = `${message.author} adlı kullanıcı bir gold!`;
      message.channel.send({embed: sorgulama})
    }
  }
  else {
    const sorgulama = new Discord.RichEmbed()
      .setTitle(`${message.author.username} Gold Sorgulama`)
      .setColor("BLUE")
      .setFooter("KU-Pİ BOT Gold Sistemi")
      .setTimestamp()
    const sorgu = await db.fetch(`goldsure_${üye.id}`);
    if(!sorgu) {
      sorgulama.description = `${üye} adlı kullanıcı bir gold üye değil.`;
      message.channel.send({embed: sorgulama})
    }
    else {
      sorgulama.description = `${üye} adlı kullanıcı bir gold!`;
      message.channel.send({embed: sorgulama})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["goldsorgula"]
};

exports.help = {
  name: 'gold-sorgula',
  description: '',
  usage: ''
};