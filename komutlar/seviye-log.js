const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );

  let kanal = await db.fetch(`kanals_${message.guild.id}`);
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`);
  let hm = await db.fetch(`seviyeacik_${message.guild.id}`);
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`);
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`);
  if (!hm)
    return message.reply(
      "Bu tuhaf! aktif edilmeyen bir seviye sistemine xp değeri eklemeyi düşünmedin umarım? \n Bunu Deniyebilirsin: `k!seviye-aç`"
    );
  let kanals = message.mentions.channels.first();
  if (!kanals)
    return message.channel.send(
      "Kanal ayarlamam için bir kanal belirtmen gerekiyor. |n Örnek: `k!seviye-kanal #level-log`"
    );

  let kontrol2;
  if (xp == null) kontrol2 = "4 (Varsayılan)";
  else kontrol2 = xp;

  let kontrol3;
  if (seviyerol == null) kontrol3 = "Seviye Rol Sistemi Aktif Değil! ";
  else kontrol3 = seviyerol;

  let bilo = new Discord.RichEmbed()
    .setTitle("İşlem Başarılı!")
    .setDescription(
      "Seviye logs kanalı ayarlandı.Üyeler seviye atlayınca orda belirteceğim."
    )
    .addBlankField()
    .addField("Seviye Log Kanalı:", kanals, true)
    .addField("Mesaj Başı Verilecek XP:", kontrol2, true)
    .addField("Seviye Rol:", kontrol3)
    .setFooter("KU-Pİ BOT Seviye Sistemi!")
    .setColor("RANDOM");
  message.channel.send(bilo);

  message.guild.owner.send(
    "Seviye sistemi **" +
      message.member.user.username +
      "** (" +
      message.member.id +
      ") tarafından logs kanalı **" +
      kanals +
      "** Olarak ayarlandı.!\n `KU-Pİ BOT Seviye Sistemi`"
  );
  db.set(`kanals_${message.guild.id}`, kanals);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "seviye-log",
  description: "taslak",
  usage: "seviye-log"
};
