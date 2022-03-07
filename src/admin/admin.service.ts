import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private AdminsRepository: Repository<Admin>,
    private connection: Connection,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    return await this.AdminsRepository.insert(createAdminDto);
  }

  async findAll() {
    return await this.AdminsRepository.find();
  }

  async findOne(id: number) {
    return await this.AdminsRepository.find({ id: id });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.AdminsRepository.update(id, updateAdminDto);
  }

  async remove(id: number) {
    return await this.AdminsRepository.delete({ id: id });
  }
}
