import jwt from 'jsonwebtoken';
import { JWT_EXPIRE, EMAIL_VERIFY_EXPIRE, PASSWORD_RESET_EXPIRE } from './constants';

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string): any => {
  return jwt.decode(token);
};

export const generateVerificationToken = (): { token: string; expires: Date } => {
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const expires = new Date(Date.now() + EMAIL_VERIFY_EXPIRE);
  return { token, expires };
};

export const generatePasswordResetToken = (): { token: string; expires: Date } => {
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const expires = new Date(Date.now() + PASSWORD_RESET_EXPIRE);
  return { token, expires };
};

export interface JWTPayload {
  userId: string;
  email: string;
  isAdmin: boolean;
  iat?: number;
  exp?: number;
}
