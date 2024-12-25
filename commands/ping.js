const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Mostra informações sobre o ping do bot e da API"),
  async execute(interaction) {
    const clientPing = Date.now() - interaction.createdTimestamp;

    const apiPing = Math.round(interaction.client.ws.ping);

    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setTitle("Informações de Ping do Bot")
      .setDescription("Aqui estão as informações de ping do bot e da API!")
      .addFields(
        { name: "Ping do Cliente", value: `${clientPing}ms`, inline: true },
        { name: "Ping da API", value: `${apiPing}ms`, inline: true },
        {
          name: "Nome do Bot",
          value: `${interaction.client.user.tag}`,
          inline: true,
        },
        {
          name: "ID do Bot",
          value: `${interaction.client.user.id}`,
          inline: true,
        },
        {
          name: "Servidores Ativos",
          value: `${interaction.client.guilds.cache.size}`,
          inline: true,
        },
        { name: "Versão do Bot", value: "0.0.3", inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Informações sobre o Bot" });

    await interaction.reply({ embeds: [embed] });
  },
};