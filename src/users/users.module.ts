import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from 'src/faculties/entities/faculty.entity';
// import { JoiValidationPipe } from '../pipes/validation.pipe';
@Module({
  imports: [TypeOrmModule.forFeature([User, Faculty])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
