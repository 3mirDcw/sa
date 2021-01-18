//Discord Code Share
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../index.js');

exports.run = async (client, message, args) => {
//Discord Code Share
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
//Discord Code Share
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  if (!args[0]) return message.channel.send(`Hatalı Kullanım >> Örnek Kullanım ;  \`k!kanal-koruma <aç/kapat>\``)
  

  if (args[0] == 'aç') { // Discord Code Share
        if (db.fetch(`kanalkoruma_${message.guild.id}`) === true) return message.channel.send('Dostum Sistem Daha Önceden Açılmış  ')
    db.set(`kanalkoruma_${message.guild.id}`, true)//Discord Code Share
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Kanal Koruma Sistemi Başarıyla Açıldı').setColor("RANDOM")); 
     message.react('638612513428209664')
  };
  if (args[0] == 'kapat') { //Discord Code Share 
       if (db.fetch(`kanalkoruma_${message.guild.id}`) === false) return message.channel.send('Dostum Sistem Zaten Kapalı ')
    db.set(`kanalkoruma_${message.guild.id}`, false) //Discord Code Share 
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Kanal Koruma Sistemi Başarıyla Kapatıldı').setColor("RANDOM"));
     message.react('638612513428209664')
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kr',"kanal-koruma"],
  permLevel: 0,
    kategori:'moderasyon'
};

exports.help = {
  name: 'kanalkoruma'
};

//Discord Code Share