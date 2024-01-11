import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Event } from 'src/events/entities/event.entity';

@Entity({ name: 'type_event' })
export class TypeEvent {
  @PrimaryGeneratedColumn()
  private id_type_event: number;

  @Column()
  private type_name_event: string;

  // @OneToMany(() => Event, (event) => event.typeEvent)
  // events: Event[];
}

// event can only have a single type event, and a single event is owned by many events that
