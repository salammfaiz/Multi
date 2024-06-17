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
      .setImage(`https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=6641e8b7&is=66409737&hm=96f69ba8bcde4ca44bf8713e22001e0bafad0335cfd1f57c439a34b4762f0e03&`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/xQF9f9yUEM')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/GlaceYT')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
