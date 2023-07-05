"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';
function generateToken(email) {
    const token = jsonwebtoken_1.default.sign({ email }, SECRET_KEY, { expiresIn: '24h' });
    return token;
}
exports.generateToken = generateToken;
function authenticateToken(token) {
    try {
        jsonwebtoken_1.default.verify(token, SECRET_KEY);
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.authenticateToken = authenticateToken;
