import { TypeEvent } from 'src/type_event/entities/type_event.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  private eventId: number;

  @Column()
  private name_event: string;

  @Column()
  private content: string;

  @Column()
  private image_event: string;

  @OneToOne(() => TypeEvent)
  @JoinColumn({ name: 'id_type_event' })
  typeEvent: TypeEvent;
}
