const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("provides user information"),
  async execute(interaction) {
    await interaction.reply(
      `this command was executed by ${interaction.user.username}, who joined at ${interaction.member.joinedAt}`
    );
  },
};
