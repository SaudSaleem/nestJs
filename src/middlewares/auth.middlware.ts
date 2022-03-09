import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { load } from 'ts-dotenv';
const env = load({
  TOKEN_SECRET: String,
});

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.body.token || req.query.token || req.headers.token;
    if (!token) {
      res.status(403).json({ error: 'A token is required for authentication' });
      //return 'A token is required for authentication';
    }
    try {
      const decoded = verify(token, '12345abcd');
      // req.user = decoded;
      console.log('decoded user is: ', decoded);
    } catch (err) {
      console.log('error occur', err.message);
      res.status(401).json({ error: 'Invalid Token' });
      //   return err.message;
    }
    next();
  }
}
