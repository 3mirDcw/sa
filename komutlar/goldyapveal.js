const Discord = require("discord.js");
const ayarlar = require("../index.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  var gold = args[0];
  if (!gold)
    return message.channel.sendMessage(
      "Lütfen `al` ve ya `ver` Yazınız.<a:no:667791232428408903>"
    );
  if (message.mentions.users.first()) {
    var ID = message.mentions.users.first();
    if (gold === "ver") {
      if (db.has(`goldsure_${ID.id}`))
        return message.reply(`Bu Üye Zaten Gold Üye<a:ok:667790870329819139>`);

      db.delete(`goldsure_${ID.id}`);
      db.set(`goldsure_${ID.id}`, "ver");
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold<a:ok:667790870329819139>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullaniciya Gold Uye **Verildi!<a:ok:667790870329819139>**`
        );
    }
    if (gold === "al") {
      if (!db.has(`goldsure_${ID.id}`))
        return message.reply(
          `Bu Üye Zaten Gold Üye Degil<a:no:667791232428408903>`
        );
      db.delete(`goldsure_${ID.id}`);
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold Uye Degil<a:no:667791232428408903>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullanicinin Gold Uyesi **Alindi<a:no:667791232428408903>**`
        );
    }
  } else if (client.users.get(args[1])) {
    var ID = client.users.get(args[1]);
    if (gold === "ver") {
      if (db.has(`goldsure_${ID.id}`))
        return message.reply(`Bu Üye Zaten Gold Üye<a:ok:667790870329819139>`);
      db.delete(`goldsure_${ID.id}`);
      db.set(`goldsure_${ID.id}`, "ver");
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold<a:ok:667790870329819139>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullaniciya Gold Uye **Verildi!<a:ok:667790870329819139>**`
        );
    }
    if (gold === "al") {
      if (!db.has(`goldsure_${ID.id}`))
        return message.reply(
          `Bu Üye Zaten Gold Üye Degil<a:no:667791232428408903>`
        );
      db.delete(`goldsure_${ID.id}`);
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold Uye Degil<a:no:667791232428408903>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullanicinin Gold Uyesi **Alindi<a:no:667791232428408903>**`
        );
    }
  } else if (!isNaN(args[1])) {
    var ID = args[1];
    if (gold === "ver") {
      if (db.has(`goldsure_${ID.id}`))
        return message.reply(`Bu Üye Zaten Gold Üye<a:ok:667790870329819139>`);
      db.delete(`goldsure_${ID}`);
      db.set(`goldsure_${ID}`, "ver");
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold<a:ok:667790870329819139>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullaniciya Gold Uye **Verildi!<a:ok:667790870329819139>**`
        );
    }
    if (gold === "al") {
      if (!db.has(`goldsure_${ID.id}`))
        return message.reply(
          `Bu Üye Zaten Gold Üye Degil<a:no:667791232428408903>`
        );
      db.delete(`goldsure_${ID}`);
      message.channel.send(
        "Başarılı `" +
          ID.tag +
          "` - `" +
          ID.id +
          `\` ID'ine Sahip Kullanıcı Artık Gold Uye Degil<a:no:667791232428408903>`
      );
      client.channels
        .get("667789366780755988")
        .send(
          "Basariyla `" +
            ID.tag +
            "` - `" +
            ID.id +
            `\` Adli Kullanicinin Gold Uyesi **Alindi<a:no:667791232428408903>**`
        );
    }
  } else {
    message.reply("Id Yazmalisin!<a:no:667791232428408903>");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gold"],
  permLevel: 5
};

exports.help = {
  name: "gold",
  description: "Premium verir veya alır.",
  usage: "gold"
};
