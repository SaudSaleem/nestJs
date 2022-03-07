import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'character varying' })
  admin_first_name: string;

  @Column({ type: 'character varying' })
  admin_last_name: string;

  @Column({ type: 'varchar', unique: true })
  admin_email: string;

  @Column({ type: 'varchar', nullable: true })
  admin_address: string;

  @Column({ type: 'varchar', nullable: true })
  admin_phone_no: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt: Date;
}
