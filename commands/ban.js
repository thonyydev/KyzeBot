const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bane um usuário do servidor")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Usuário a ser banido")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    const embed = new EmbedBuilder()
      .setColor("#ff0000")
      .setTitle("Usuário Banido")
      .setDescription(`${user.tag} foi banido do servidor.`)
      .setTimestamp()
      .setFooter({ text: "Comando Ban" });

    await interaction.reply({ embeds: [embed] });

    const member = interaction.guild.members.cache.get(user.id);
    if (member) {
      await member.ban({ reason: "Banimento por comando" });
    }
  },
};