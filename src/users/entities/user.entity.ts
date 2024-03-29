import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  private user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column()
  max_tickets_purchase: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
