const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warn a user for inappropriate behavior.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select the user to warn')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        await interaction.reply(`${user.username} has been warned!`);
    },
};
