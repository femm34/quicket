import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'canceled_tickets' })
export class CanceledTicket {
  @PrimaryGeneratedColumn()
  private id: number;

  @UpdateDateColumn()
  private date: Date;

  @Column({ default: false })
  private status: boolean;

  // Test this, if not works just change it or delete it
  @ManyToOne(() => User, (user) => user.canceledTickets)
  user: User;
}
