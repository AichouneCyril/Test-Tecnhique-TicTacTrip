"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateTokenController = exports.generateTokenController = void 0;
const tokenUtils_1 = require("../utils/tokenUtils");
const generateTokenController = (req, res) => {
    const { email } = req.body;
    const token = (0, tokenUtils_1.generateToken)(email);
    res.json({ token });
};
exports.generateTokenController = generateTokenController;
const authenticateTokenController = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ error: 'Invalid token' });
    }
    else {
        const isValid = (0, tokenUtils_1.authenticateToken)(token);
        if (!isValid) {
            res.status(401).json({ error: 'Invalid token' });
        }
        else {
            next();
        }
    }
};
exports.authenticateTokenController = authenticateTokenController;
