import { Request, Response } from "express";
import { generateToken, authenticateToken as verifyToken } from '../utils/tokenUtils';

export const generateTokenController = (req: Request, res: Response) => {
    const { email } = req.body;
    const token = generateToken(email);
    res.json({ token });
}

export const authenticateTokenController = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ error: 'Invalid token' });
    } else {
        const isValid = verifyToken(token);
        if (!isValid) {
            res.status(401).json({ error: 'Invalid token' });
        } else {
            next();
        }
    }
}

