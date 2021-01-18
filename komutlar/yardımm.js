const Discord = require("discord.js");
const ayarlar = require("../index.js");
const data = require("quick.db");
var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const emoji = client.emojis.find(emoji => emoji.name === "nitro");
  const embedyardim = new Discord.RichEmbed()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/633643325148233729/664714756258791443/mka1.gif"
    )
    .setTitle("Komutlar")
    .setDescription("**__Yardım Menüsü__**")
    .setColor(0xffd200)
    .addField(
      "<a:tok:683700404047183884> **Gold Sistemi**",
      `<a:hane:683700452197531686> k!goldsistemi  **(Gelişmiş Gold Üyelik Sistemi !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Mod Log Sistemi**",
      `<a:hane:683700452197531686> k!mod-log  **(Gelişmiş Mod Log Sistemi !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Geçici Oda Sistemi**",
      `<a:hane:683700452197531686> k!geçici-oda-kurulum ve k!geçici-odalar  **(Geçici Odalar!)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Uyarma Sistemi**",
      `<a:hane:683700452197531686> k!uyarı-sistemi  **(Gelişmiş Uyarı Sistemi !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Seviye Sistemi**",
      `<a:hane:683700452197531686> k!seviyesistemi **(Gelişmiş Seviye Sistemi !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Küfür Engelleme Sistemi**",
      `<a:hane:683700452197531686> k!küfüraç | k!küfürkapat  **(Küfür Engelleme !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Kayıt sistemi**",
      `<a:hane:683700452197531686> k!kayıtsistemi  **(Kayıt Sistemi !)**`
    )
    .addField(
      "<a:tok:683700404047183884> **Sunucunuzu Paylaşma**",
      `<a:hane:683700452197531686> k!sunucutanıt  **Sunucunuzu Destek Sunucumuza Atmak**`
    )
    .addField(
      "<a:tok:683700404047183884> **Oy Vermek☺️**",
      `<a:hane:683700452197531686>  k!oyver`
    )
    .addField(
      "<a:tok:683700404047183884> **Yetkili komutları için**",
      `<a:hane:683700452197531686>  k!yetkili`
    )
    .addField(
      "<a:tok:683700404047183884> **Resimli Giriş Çıkış**",
      `<a:hane:683700452197531686>  k!hoşgeldin`
    )
    .addField(
      "<a:elmaa:664451976440053760>Linkler<a:elmaa:664451976440053760>",
      `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=613168038526713858&permissions=8&scope=bot)` +
        " | " +
        `[Destek Sunucusu](https://discord.gg/sA8uSa9)`,
      false
    );

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel
      .send(`🔔 Lütfen Bekleyin Yardım Menüsü Yükleniyor`)
      .then(m => m.delete(1000));
    message.channel.send(embedyardim);
    message.react(emoji);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};
exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "yardım", //Komutun adı (Komutu girerken lazım olucak)
  description: "yardım", //Komutun Açıklaması
  usage: "yardım" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};
