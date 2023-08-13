const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("provides information about the server"),
  async execute(interaction) {
    await interaction.reply(
      `the server is ${interaction.guild.name}, which has ${interaction.guild.memberCount} members`
    );
  },
};
