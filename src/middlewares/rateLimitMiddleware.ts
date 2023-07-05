import { RequestHandler } from "express";
import WordCount, { WordCountDocument } from "../models/wordCountModel";
const MAX_WORDS_PER_DAY = 80000;

export const rateLimitMiddleware: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Invalid token");
  }

  const wordCount = await getWordCountFromDatabase(token);
  if (wordCount >= MAX_WORDS_PER_DAY) {
    return res.status(402).send("Word limit reached");
  }

  next();
};

export async function getWordCountFromDatabase(token: string): Promise<number> {
  try {
    const wordCountDoc: WordCountDocument | null = await WordCount.findOne({
      token,
    });
    if (wordCountDoc) {
      return wordCountDoc.wordCount;
    } else {
      return 0;
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du nombre de mots depuis la base de données :",
      error
    );
    throw error;
  }
}

export default rateLimitMiddleware;
