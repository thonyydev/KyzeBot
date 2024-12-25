const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Expulsa um usuário do servidor")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Usuário a ser expulso")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    const embed = new EmbedBuilder()
      .setColor("#ff0000")
      .setTitle("Usuário Expulso")
      .setDescription(`${user.tag} foi expulso do servidor.`)
      .setTimestamp()
      .setFooter({ text: "Comando Kick" });

    await interaction.reply({ embeds: [embed] });

    const member = interaction.guild.members.cache.get(user.id);
    if (member) {
      await member.kick("Expulsão por comando");
    }
  },
};