import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Big from 'big.js';

@Entity({ name: 'ticket' })
export class Ticket {
  @PrimaryGeneratedColumn()
  private ticket_id: number;

  @Column()
  private price: number;
}
