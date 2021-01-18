const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  //if (!user) return message.reply("Bir kullanıcıyı etiketleyiniz!")

  const db = require("quick.db");

  const Durum = user.presence.status;
  const Durm =
    Durum == "online"
      ? 0x00ae86
      : Durum == "offline"
      ? 0x808080
      : Durum == "idle"
      ? 0xffff00
      : Durum == "dnd"
      ? 0xff0000
      : 0x00ae86;
  const durm =
    Durum == "online"
      ? client.emojis.get(client.emojiler.çevrimiçi) + "Çevrimiçi"
      : Durum == "offline"
      ? client.emojis.get(client.emojiler.çevrimdışı) + "Çevrimdışı"
      : Durum == "idle"
      ? client.emojis.get(client.emojiler.boşta) + "Boşta"
      : Durum == "dnd"
      ? client.emojis.get(client.emojiler.rahatsızetme) + "Rahatsız etmeyin"
      : `Bulunamadı`;

  const aylar = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };

  const member = message.guild.member(user);
  const embed = new Discord.RichEmbed()
    .setColor(Durm)
    .setThumbnail(user.avatarURL || user.defaultAvatarURL)
    .setAuthor(`${user.username} - Kullanıcı bilgisi`)
    .addField(
      `<:657919831177166880:670001921104543803>Kullancı tag<:657919831349264384:670001921410596874>`,
      `${user.tag}`
    )
    .addField(
      `<a:632591547270955018:670001931376394270>Kullanıc id<a:632591547270955018:670001931376394270>`,
      `${user.id}`
    )
          .addField("» Sunucudaki Kullanıcı Adı:", `${member.nickname !== null ? `${member.nickname}` : 'Sunucuda Kullanıcı Adı Gerçek Adında Bırakılmış'}`)

    .addField(
      `<a:653955388248686631:665224973094486016>Discord kayıt olma tarihi<a:653955388248686631:665224973094486016>`,
      `${moment(user.createdAt).format("DD")} ${
        aylar[moment(user.createdAt).format("MM")]
      } ${moment(user.createdAt).format("YYYY HH:mm:ss")}`
    )
    .addField(
      `<a:668364956973924382:670001923868327968>Sunucuya katılma tarihi<a:668364956973924382:670001923868327968>`,
      `${moment(user.joinedAt).format("DD")} ${
        aylar[moment(user.joinedAt).format("MM")]
      } ${moment(user.joinedAt).format("YYYY HH:mm:ss")}`
    )
    .addField(`Durum`, `${durm || "Bilinmiyor"}`);
  //.addField("Durum Mesajı", oynuyor ? oynuyor : "Durum mesajı boş")//`${user.presence.game ? user.presence.game.name : 'Durum mesajı boş'}`)

  try {
    if (user.presence.game.type === 0) {
      embed.addField(
        `Durum mesajı`,
        `${user.presence.game.name} ${durm}` || `Durum Mesajı Boş`
      );
    }
    if (user.presence.game.type === 3) {
      embed.addField(
        `Durum mesajı`,
        `${user.presence.game.name} ${durm}` || `Durum Mesajı Boş`
      );
    }
    if (user.presence.game.type === 2) {
      embed.addField(
        `Durum mesajı`,
        `${user.presence.game.name} ${durm}` || `Durum Mesajı Boş`
      );
    }
    if (user.presence.game.type === 1) {
      embed.addField(
        `Durum mesajı`,
        `[${user.presence.game.name} ${durm}](${user.presence.game.url})` ||
          `Durum Mesajı Boş`
      );
    }
  } catch (e) {
    embed.addField(`Durum mesajı`, `Durum Mesajı Boş`);
  }
  embed
    .addField(
      `<:657920768746979328:670001921779826721>Botmu<:657920768746979328:670001921779826721>`,
      `${user.bot ? "evet" : "hayır"}`
    )
    .addField(
      `Kullanıcı rolleri`,
      `${
        member.roles
          .filter(r => r.name !== "@everyone")
          .map(r => r)
          .join(" **|** ")
          ? member.roles
              .filter(r => r.name !== "@everyone")
              .map(r => r)
              .join(" **|** ")
          : `Bulunamadı`
      }`
    );

  var son = "evet";
  try {
    if (
      !message.guild.members.get(user.id).lastMessage.embeds[0] ||
      !message.guild.members.get(user.id).lastMessage.edits[1]
    ) {
      var son = user.lastMessage;
    }

    if (message.guild.members.get(user.id).lastMessage.embeds[0]) {
      var son = `**${
        message.guild.members.get(user.id).lastMessage.embeds[0].author.name
      }** başlıklı bir embed yollamış.`;
    }

    if (message.guild.members.get(user.id).lastMessage.edits[1].content) {
      var son = `**${
        message.guild.members.get(user.id).lastMessage.edits[1].content
      }** yazan bir mesaj göndermiş ama mesajı **${
        message.guild.members.get(user.id).lastMessage.edits[0].content
      }** olarak düzenlemiş.`;
    }
  } catch (e) {
    var son = "Herhangi bir mesaj göndermemiş";
  }

  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı", "kullanıcıbilgi"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "kullanıcı-bilgi",
  category: "kullanıcı",
  description:
    "İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.",
  usage: "kullanıcı-bilgi or kullanıcı-bilgi <@kullanıcı>"
};
