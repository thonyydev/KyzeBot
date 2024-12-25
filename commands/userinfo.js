const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Mostra informações sobre um usuário")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Usuário para mostrar as informações")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    const embed = new EmbedBuilder()
      .setColor("#ff00ff")
      .setTitle(`${user.tag} - Informações`)
      .addFields(
        { name: "Nome", value: user.tag, inline: true },
        { name: "ID", value: user.id, inline: true },
        {
          name: "Data de Criação",
          value: user.createdAt.toDateString(),
          inline: true,
        },
        {
          name: "Avatar",
          value: `[Clique aqui para ver](${user.displayAvatarURL()})`,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: "Comando User Info" });

    await interaction.reply({ embeds: [embed] });
  },
};