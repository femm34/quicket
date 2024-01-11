import { CanceledTicket } from 'src/canceled_tickets/entities/canceled_ticket.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
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

  @ManyToMany(() => Ticket)
  @JoinTable()
  has: Ticket;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Test this, if not works just change it or delete it
  @OneToMany(() => CanceledTicket, (canceledTickets) => canceledTickets.user)
  canceledTickets: CanceledTicket[];

}
