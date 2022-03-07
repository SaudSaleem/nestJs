import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private FacultyRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto) {
    return await this.FacultyRepository.insert(createFacultyDto);
  }

  async findAll() {
    return await this.FacultyRepository.find();
  }

  async findOne(id: number) {
    return await this.FacultyRepository.find({ id: id });
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return await this.FacultyRepository.update(id, updateFacultyDto);
  }

  async remove(id: number) {
    return await this.FacultyRepository.delete({ id: id });
  }
}
