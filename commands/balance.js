const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const User = require("../models/User");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Mostra informações econômicas do usuário")
    .addUserOption((option) =>
      option
        .setName("usuario")
        .setDescription("O usuário para verificar (opcional)")
    ),

  async execute(interaction) {
    const target = interaction.options.getUser("usuario") || interaction.user;

    try {
      let user = await User.findOne({ userId: target.id });

      if (!user) {
        user = new User({ userId: target.id, username: target.username });
        await user.save();
      }

      const embed = new EmbedBuilder()
        .setColor("#00FF00")
        .setTitle(`Informações de ${target.username}`)
        .addFields(
          { name: "Saldo", value: `💰 ${user.balance} moedas`, inline: true },
          {
            name: "Transações",
            value: `${user.transactions.length}`,
            inline: true,
          }
        )
        .setTimestamp()
        .setFooter({ text: "Sistema de Economia" });

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply(
        "Houve um erro ao buscar as informações do usuário."
      );
    }
  },
};