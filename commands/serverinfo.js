const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Mostra informações sobre o servidor"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#6600ff")
      .setTitle("Informações do Servidor")
      .addFields(
        {
          name: "Nome do Servidor",
          value: interaction.guild.name,
          inline: true,
        },
        { name: "ID do Servidor", value: interaction.guild.id, inline: true },
        {
          name: "Membros",
          value: `${interaction.guild.memberCount}`,
          inline: true,
        },
        {
          name: "Data de Criação",
          value: interaction.guild.createdAt.toDateString(),
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: "Comando Server Info" });

    await interaction.reply({ embeds: [embed] });
  },
};