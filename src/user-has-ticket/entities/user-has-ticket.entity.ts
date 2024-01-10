import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_has_ticket' })
export class UserHasTicket {

  @PrimaryGeneratedColumn()
  private id:number;
}
