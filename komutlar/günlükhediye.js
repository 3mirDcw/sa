const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (client, message,args) => {

   let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
 let cooldown = 1.728e+8, 
        amount = Math.floor(Math.random() * 10) + 400;      
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        

        const embed = new Discord.RichEmbed()
        .setTitle('Hata!')
        .setColor('BLACK')
        .setDescription(`Günlük ödülünü zaten aldın!\nYeniden almana: **${timeObj.hours} saat ${timeObj.minutes} dakika**!`)
        message.channel.send(embed);
        return
    
  
}
   
  

 

      
      
  
        const embed = new Discord.RichEmbed()
        .setTitle("Günlük ödülün!")
        .setDescription(`Günlük Ödülün: **${amount}** Puan`)
        .setColor('BLACK')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
      
        db.add(`goldpuan_${message.author.id}`, amount);

      
    
     

    
    
    
    
    

  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['günlük'],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'günlükhediyem',
  description: 'Günlük ödül alırsınız.',
  usage: 'günlükhediyem',
   
};