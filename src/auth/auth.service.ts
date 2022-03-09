import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { load } from 'ts-dotenv';
const env = load({
  TOKEN_SECRET: String,
});
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}
  login = async ({ email, password }) => {
    const user = await this.UserRepository.find({ user_email: email });
    if (user && password === user[0].user_password) {
      // check user found and verify password
      const token = sign(
        // authentication successful
        { id: user[0].id, email: email },
        '12345abcd',
        {
          expiresIn: '10h',
        },
      );
      // save user token
      this.UserRepository.update(user[0].id, {
        token: token,
      });
      return token;
    }
  };

  logout = async ({ id }) => {
    this.UserRepository.update(id, {
      token: null,
    });
  };
}
