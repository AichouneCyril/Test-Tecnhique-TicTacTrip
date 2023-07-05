"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordCountFromDatabase = exports.rateLimitMiddleware = void 0;
const MAX_WORDS_PER_DAY = 80000;
const rateLimitMiddleware = (req, res, next) => {
    // Vérifiez le nombre de mots dans la journée et renvoyez une erreur 402 si nécessaire
    const wordCount = getWordCountFromDatabase(req.body.token);
    if (wordCount >= MAX_WORDS_PER_DAY) {
        return res.status(402).send("Limite de mots atteinte");
    }
    next();
};
exports.rateLimitMiddleware = rateLimitMiddleware;
function getWordCountFromDatabase(token) {
    // Récupérez le nombre de mots pour le token à partir de votre base de données
    const wordCount = 80000;
    return wordCount;
}
exports.getWordCountFromDatabase = getWordCountFromDatabase;
exports.default = exports.rateLimitMiddleware;
