import { Request, Response } from "express";

const TOKEN = process.env.AUTH_TOKEN;
const WORDS_PER_DAY_LIMIT = 80000;

let wordsCount: { [key: string]: number } = {};

export const getToken = (req: Request, res: Response) => {
  const email = req.body.email;
  if (email && email.toLowerCase() === "foo@bar.com") {
    res.status(200).json({ token: TOKEN });
  } else {
    res.status(401).json({ error: "Invalid email" });
  }
};

export const justifyText = (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const text = req.body.text;

  if (!token || token !== `Bearer ${TOKEN}`) {
    res.status(401).json({ error: "Invalid token" });
  } else if (!text) {
    res.status(400).json({ error: "Invalid request body" });
  } else {
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    if (wordCount > WORDS_PER_DAY_LIMIT) {
      res.status(402).json({
        error: " 402 Payment Required",
      });
    } else {
      if (!wordsCount[token]) {
        wordsCount[token] = wordCount;
      } else {
        wordsCount[token] += wordCount;
      }

      const justifiedText = words.join(" ");
      res.status(200).send(justifiedText);
    }
  }
};
