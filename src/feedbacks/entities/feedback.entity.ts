import { Column, Entity } from 'typeorm';

@Entity({ name: 'feedback' })
export class Feedback {
  
  @Column()
  private opinion: string;
}
