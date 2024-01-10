import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event' })
export class Event {
 
  @PrimaryGeneratedColumn()
  private eventId:number;

}
