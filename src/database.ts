import mongoose from "mongoose";
import WordCountModel from "./models/wordCountModel";
import UserModel from "./models/usermodel";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URL; // Assurez-vous que la variable d'environnement correspond à MONGO_URL
mongoose.connect(MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;

// Vérification de la connexion réussie
db.once("open", () => {
  console.log("Connecté à la base de données MongoDB");
});

// Gestion des erreurs de connexion
db.on("error", (error) => {
  console.error("Erreur de connexion à la base de données MongoDB:", error);
});

// importer les models
export const WordCount = WordCountModel;

export const User = UserModel;

export default db;
