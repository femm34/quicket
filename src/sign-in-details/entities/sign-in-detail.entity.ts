import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sign_in_details' })
export class SignInDetail {

  @PrimaryGeneratedColumn()
  private sessionId: number;

  @Column()
  private loggedIsOn: boolean;
  
}
