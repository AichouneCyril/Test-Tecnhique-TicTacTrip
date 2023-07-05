import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export function generateToken(email: string): string {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '24h' });
  return token;
}

export function authenticateToken(token: string): boolean {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
}
