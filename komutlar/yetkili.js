const Discord = require("discord.js");
  const ayarlar = require("../index.js");

  var prefix = ayarlar.prefix;

  exports.run = (client, message, params) => {
    const emoji = client.emojis.find(emoji => emoji.name === "nitro");
    const embedyardim = new Discord.RichEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/633643325148233729/664714756258791443/mka1.gif"
      )
      .setTitle("Komutlar")
      .setDescription("**__Yetkili Menüsü__**")
      .setColor(0xffd200)
    .addField(
              "<a:tok:683700404047183884> **Ever Engelleme**",
        `<a:hane:683700452197531686> k!ever-engel `
)
      .addField(
        "<a:tok:683700404047183884> **Odaya Çekme**",
        `<a:hane:683700452197531686> k!çek @kullanıcı <kanalıd>  **(Sesli Odaya Çekme !)**`
      )
      .addField(
        "<a:tok:683700404047183884> **Odaları Koruma Sistemi**",
        `<a:hane:683700452197531686> k!kanalkoruma  **(Kanal Koruma !)**`
      )
      .addField(
        "<a:tok:683700404047183884> **Odaları Ve Rolleri Yeniden Kurmak Veya Kaydetmek**",
        `<a:hane:683700452197531686> k!yedek  **(Sunucu Yedekleme !)**`
      )
      .addField(
        "<a:tok:683700404047183884> **Ban Limit Ayarlama!(Sunucu Sahibine Özel!)**",
        `<a:hane:683700452197531686> k!banlimit  **(Banlimit Ayarlama !)**`
      )

      .addField(
        "<a:tok:683700404047183884> **Otorol,Davet Takip,Giriş-Çıkış,Sayaç,Destek Sistemi,Gibi Sistemler Panelden Ayarlanır!**"
      )
      .addField(
        "<a:tok:683700404047183884> **Güvenlik Kanal Ayarlama**",
        `<a:hane:683700452197531686> k!güvenlik #kanal **(Resimli Güvenlik Ayarlar)**`
      )
      .addField(
        "<a:tok:683700404047183884> **OtoCevapyalıcı Ayarlar**",
        `<a:hane:683700452197531686> k!otocevap aç **(Oto Cevaplayıcı Açar)**`
      )
      .addField(
        "<a:tok:683700404047183884> **Sunucu Kur komutları** ",
        `<a:hane:683700452197531686>  k!sunucu-kur`
      )
      .addField(
        "<a:hane:683700452197531686>Linkler<a:hane:683700452197531686>",
        `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=613168038526713858&permissions=8&scope=bot)` +
          " | " +
          `[Destek Sunucusu](https://discord.gg/sA8uSa9)`,
        false
      );

    if (!params[0]) {
      const commandNames = Array.from(client.commands.keys());
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
  name: "yetkili", //Komutun adı (Komutu girerken lazım olucak)
  description: "", //Komutun Açıklaması
  usage: "k!yetkili" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};