import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
}
import { Faculty } from 'src/faculties/entities/faculty.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  user_first_name: string;

  @Column({ type: 'varchar' })
  user_last_name: string;

  @Column({ type: 'varchar', unique: true })
  user_email: string;

  @Column({ type: 'varchar' })
  user_password: string;

  @Column({ type: 'varchar', nullable: true })
  user_address: string;

  @Column({ type: 'varchar', nullable: true })
  user_phone_no: string;

  @Column({ type: 'enum', enum: UserRole })
  user_role: UserRole;

  @Column({ type: 'int', nullable: true })
  facultyId: number;

  @Column({ type: 'varchar', nullable: true })
  token: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt: Date;

  @ManyToOne(() => Faculty, (faculty) => faculty.users)
  faculty: Faculty;
}
