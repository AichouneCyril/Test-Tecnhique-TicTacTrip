"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenController_1 = require("./src/controllers/tokenController");
const justifyController_1 = require("./src/controllers/justifyController");
const rateLimitMiddleware_1 = __importDefault(require("./src/middlewares/rateLimitMiddleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/token", tokenController_1.generateTokenController);
app.post("/justify", tokenController_1.authenticateTokenController, rateLimitMiddleware_1.default, justifyController_1.justifyText);
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
exports.default = app;
