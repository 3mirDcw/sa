const Discord = require("discord.js");
const ayarlar = require("../index.js");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const emoji = client.emojis.find(emoji => emoji.name === "goldum");
  const embedyardim = new Discord.RichEmbed()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/633643325148233729/664714756258791443/mka1.gif"
    )
    .setTitle("Komutlar")
    .setDescription("**__Gold Menüsü__**")
    .setColor(0xffd200)
  .addField(
                              "<a:tok:646575787683610645> **Puan Öğrenme**",
      `<a:elmaa:664451976440053760> **k!puanım**  **(Gelişmiş Puan Öğrenme Sistemi !)**`
)
  .addField(
                          "<a:tok:646575787683610645> **Günlük Hediye**",
      `<a:elmaa:664451976440053760>** k!günlükhediyem **`
)
  .addField(
                      "<a:tok:646575787683610645> **Gold Alma Sistemi**",
      `<a:elmaa:664451976440053760>**k!p-menü**`
)
  .addField(
                      "<a:tok:646575787683610645> **Geçici Oda Sistemi**",
      `<a:elmaa:664451976440053760> **k!p-market**`
)
  .addField(
                  "<a:tok:646575787683610645> **Gold Üye Giriş Sistemi**",
      `<a:elmaa:664451976440053760> **k!gkanal**  **(Gold Üye Giriş Sistemi !)**`
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
        message.channel.send(`🔔 Lütfen Bekleyin Gold Menüsü Yükleniyor`).then(m => m.delete(1000));
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
  aliases: ['goldluk'], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "goldsistemi", //Komutun adı (Komutu girerken lazım olucak)
  description: "yardım", //Komutun Açıklaması
  usage: "goldsistemi" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};