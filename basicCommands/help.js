const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/united-city'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in:** ${serverCount} Servers\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [FAIZEN.ExE](https://www.youtube.com/@Faizen.Sosuke)**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: 'Avatar, Owner, Support, Invite',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: ' Play, Stop, Seek, Volume, Pause, Resume, Skip, Remove, Shuffle, Queue',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' Ascii, Joke, Roll',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: ' Cat, Dog',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '?animecommands for more info',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: ' Kick, Ban, Serverinfo, Userinfo',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://media.discordapp.net/attachments/1197833256645693453/1252916319020515349/static.png?ex=6673f4c0&is=6672a340&hm=3a88e73e3fab394db362ff769bd423abf84aa9840dcdd63df369066679fb45e2&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/Faizen.Sosuke')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/united-city')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/salammfaiz')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
