import express from "express";
import {
  generateTokenController,
  authenticateTokenController,
} from "./src/controllers/tokenController";
import { justifyText } from "./src/controllers/justifyController";
import rateLimitMiddleware from "./src/middlewares/rateLimitMiddleware";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/token", generateTokenController);

app.post(
  "/justify",
  authenticateTokenController,
  rateLimitMiddleware,
  justifyText
);

app.listen(port, () => {
  console.log("Serveur démarré sur le port 3000");
});

export default app;
