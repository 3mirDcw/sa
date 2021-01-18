const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const ayarlar = require("../index.js");
  let ıd = ayarlar.yetkili;
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.reply(
      `:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`
    );

  message.guild.members.forEach(kullanıcı => {
    kullanıcı.setNickname("İsminiz Sıfırlandı");
  });
  message.reply(`Herkesin İsmini Kendi Orjinal İsmi Yaptım!`);
  // Ready Code
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkesinisimsıfırla", "herkesin-isimsıfırla"],
  permLevel: 4
};

exports.help = {
  name: "herkesin-isim-sıfırla"
};
