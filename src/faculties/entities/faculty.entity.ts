import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  faculty_name: string;

  @Column({ type: 'varchar' })
  faculty_description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt: Date;

  @OneToMany(() => User, (User) => User.faculty)
  users: User[];
}
