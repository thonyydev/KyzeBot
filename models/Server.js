const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  welcomeChannel: { type: String, default: null },
  customMessage: { type: String, default: "Bem-vindo!" },
});

module.exports = mongoose.model("Server", serverSchema);