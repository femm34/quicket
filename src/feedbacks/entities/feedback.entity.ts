import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'feedback' })
export class Feedback {

  @PrimaryGeneratedColumn()
  private feedbackId:number;
  
  @Column()
  private opinion: string;
}
