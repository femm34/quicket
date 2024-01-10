import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'type_ticket' })
export class TypeTicket {

  @PrimaryGeneratedColumn()
  private type_ticket_id: number;

  @Column()
  private type_name: string;

  @Column()
  private seat: number;

  @Column()
  private qr_code: string;

  @Column()
  private stock: number;
}
