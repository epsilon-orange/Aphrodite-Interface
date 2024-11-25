const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('all')
		.setDescription('send message to all interfaces')
        .addStringOption(option =>
            option.setName('content')
                .setDescription('what you saying')
        ),
        
	async execute(interaction) {
        
             interaction.guild.channels.cache.get('1308011402425794590').send(interaction.options.getString('content'))
             interaction.guild.channels.cache.get('1308009370503745608').send(interaction.options.getString('content'))
             interaction.guild.channels.cache.get('1308343937236340817').send(interaction.options.getString('content'))
             interaction.guild.channels.cache.get('1308011148117020752').send(interaction.options.getString('content'))

             await interaction.reply("Message Sent")
	},
};