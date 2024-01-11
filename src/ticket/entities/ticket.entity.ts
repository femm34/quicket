import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Event } from 'src/events/entities/event.entity';
import { TypeTicket } from 'src/type-ticket/entities/type-ticket.entity';


@Entity({ name: 'ticket' })
export class Ticket {
  @PrimaryGeneratedColumn()
  private ticket_id: number;

  @Column()
  private price: number;

  @OneToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event_id: Event;

  @OneToOne(() => TypeTicket)
  @JoinColumn({ name: 'type_ticket' })
  type_ticket: TypeTicket;
}
