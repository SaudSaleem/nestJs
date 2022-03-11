import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
const moduleMocker = new ModuleMocker(global);
describe('UsersController', () => {
  enum UserRole {
    STUDENT = 'Student',
    TEACHER = 'Teacher',
  }
  let controller: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
    })
      .useMocker((token) => {
        if (token === UsersService) {
          return { findAll: jest.fn().mockResolvedValue(['user 1']) };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(
            token,
          ) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();
    controller = moduleRef.get(UsersController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  it('should be defined', () => {
    expect(controller.findAll()).toBeDefined();
    console.log('saud saleem', controller.findAll());
  });
  // it('should create a user', () => {
  //   expect(
  //     controller.create({
  //       user_first_name: 'Test',
  //       user_last_name: 'User',
  //       user_email: 'test@gmail.com',
  //       user_password: '4567cfghj',
  //       user_address: 'sasa',
  //       user_phone_no: '03087912998',
  //       user_role: UserRole.STUDENT,
  //       faculty_id: 0,
  //       token: '',
  //     }),
  //   ).toEqual({
  //     id: 123,
  //     user_first_name: 'Test',
  //     user_last_name: 'User',
  //     user_email: 'test@gmail.com',
  //     user_password: '4567cfghj',
  //     user_address: 'sasa',
  //     user_phone_no: '03087912998',
  //     user_role: UserRole.STUDENT,
  //     faculty_id: 0,
  //     token: '',
  //   });
  // });
});
