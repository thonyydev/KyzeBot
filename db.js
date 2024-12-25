const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const dbURL = url;

    console.log("Tentando conectar ao MongoDB...");
    await mongoose.connect(dbURL);

    console.log("Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;