const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
exports.run = async function (client, message, args)  {
  const DBL = require('dblapi.js')
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzE2ODAzODUyNjcxMzg1OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgxMzUxMjcxfQ.vj9JWDKJ_spXFmHuk-O1hhZt-1WlEU73EixwENQ_wXU', client) 
    let lastDaily = await db.fetch (`gunluk_${message.guild.id}`)
dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
      let cooldown = 8.64e7, // 24 Saat
    amount = Math.floor(Math.random() * 1000) + 4000
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));

    const embed = new Discord.RichEmbed()
      .setDescription("Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin.")
      .setColor(0x00ffff);
    message.channel.send({ embed });
  } else {
    const embed = new Discord.RichEmbed()
      .setTitle(
        "🔔**|◆ Başarıyla Sunucunuz Tanıtıldı ◆ | Sunucumda Olan Yere Tıklayarak Tanıtılan Sunucuyu Görmüş Olursunuz Ve Bize Destek Verirsiniz**"
      )
      .setDescription(
        "**🔒Sunucunuz Başarıyla🔒** [Sunucumda](https://discord.gg/sA8uSa9) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz🔑**"
      )
      .setColor("GREEN");
    message.channel.sendEmbed(embed);
    message.channel.createInvite({ maxAge: 0 }).then(invite => {
      const embed = new Discord.RichEmbed()
        .addField(`Tanıtan Yetkili`, message.author.tag, true)
        .addField(`Tanıtılan Sunucun İsmi`, message.guild.name, true)
        .addField(
          `Tanıtılan Sunucudaki Üye Sayısı`,
          message.guild.members.size,
          true
        )
        .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL);
      client.channels.get("667668501510619136").send(embed);
      db.set(`gunluk_${message.guild.id}`, Date.now());
    });
  }
    }
   else {
      message.channel.send("Bu komutu kullanabilmek için 12 saatte bir oy vermelisiniz!\nSite: https://top.gg/bot/613168038526713858/vote \nNot: Eğer oy verdiyseniz sisteme düşmesini bekleyiniz.")
    }
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucutanıt"],
  permLevel: 4,
  kategori: "moderasyon"
};

exports.help = {
  name: "sunucu-tanıt",
  description: "Sunucunuzu Tanıtır.",
  usage: "sunucutanıt"
};