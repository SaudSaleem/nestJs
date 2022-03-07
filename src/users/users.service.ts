import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AssignUserDto } from './dto/assign-user.dto';
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Faculty)
    private FacultyRepository: Repository<Faculty>,
    private connection: Connection,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.UserRepository.insert(createUserDto);
  }

  async assignFaculty(assignUserDto: AssignUserDto) {
    //const user = await this.UserRepository.find({ id: assignUserDto.user_id });

    //ACTUAL IMPLEMENTATION
    // enum UserRole {
    //   STUDENT = 'Student',
    //   TEACHER = 'Teacher',
    // }
    // const user1 = new User();
    // user1.user_first_name = 'saud';
    // user1.user_last_name = 'saleem';
    // user1.user_email = 'saleem@yahoo.com';
    // user1.user_password = 'saleem73654274sasdadsad.com';
    // user1.user_role = UserRole.STUDENT;
    // await this.connection.manager.save(user1);

    // const faculty = new Faculty();
    // faculty.faculty_name = 'Islamniat';
    // faculty.faculty_description = 'all about islamic studies';
    // faculty.users = [user1];
    // await this.connection.manager.save(faculty);

    return await this.UserRepository.update(assignUserDto.user_id, {
      facultyId: assignUserDto.facultyId,
    });
  }
  async findAll() {
    return await this.UserRepository.find();
  }

  async findOne(id: number) {
    return await this.UserRepository.find({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.UserRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.UserRepository.delete({ id: id });
  }
}
