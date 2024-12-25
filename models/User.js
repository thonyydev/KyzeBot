const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // ID do usuário no Discord
  username: { type: String, required: true }, // Nome de usuário
  balance: { type: Number, default: 0 }, // Saldo do usuário
  transactions: { type: [String], default: [] }, // Histórico de transações
});

module.exports = mongoose.model("User", userSchema);