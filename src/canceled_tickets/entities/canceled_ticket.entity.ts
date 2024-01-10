import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'canceled_tickets' })
export class CanceledTicket {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private date: Date;

  @Column()
  private status: boolean;
}
