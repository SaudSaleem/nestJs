import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  const usersService = { findAll: () => ['test'] };

  beforeAll(async () => {
    console.log(12343367856785678);
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET user`, () => {
    return request(app.getHttpServer()).get('/users').expect(200).expect({
      data: usersService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
