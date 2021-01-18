const Discord = require("discord.js");
const ayarlar = require("../index.js");

exports.run = async (client, message, params) => {
  let prefix = ayarlar.prefix;

  if (!params[0]) {
      const embedyardim = new Discord.RichEmbed()
      `= **KU-Pİ Ana Komutları** =
​
k!sunucutanıt    ::  Destek Sunucusunda Sunucunu Tanıtır.
k!temke-at       ::  tekme atarsınız.
k!canlıcestek    ::  Yetkililer İle İletişime Geçersiniz.
k!gkanal     ::  hoşgeldin görüşürüz resimleri ayarlar.
k!sayaç          ::  sayaç ayarlar.
k!sigara         ::  Şakadan Sigara İçersiniz.
k!triggered      ::  Triggeredlenirsiz.
k!sahip          ::  Sahip Komutlarını Gösterir.
k!saat kaç           ::  Saatinizi Algılar Ve Size Söyler
k!sev            ::  Birisini Seversiniz.
k!rol-ver        ::  Kişiye Rol Verir.
k!otorol         ::  Otorol Ayarlar!**
​
# Komutlar hakkında yardım almak icin k!yardım <komut ismi>`
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
        `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: k!${command.help.usage}`
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "anakomutlar",
  description: "anakomutları gösterir",
  usage: "anakomutlar"
};
