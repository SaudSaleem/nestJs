import { PartialType } from '@nestjs/mapped-types';
import { CreateFacultyDto } from './create-faculty.dto';

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
  faculty_name: string;
  faculty_description: string;
}
