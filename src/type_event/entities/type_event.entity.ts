import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:""})
export class TypeEvent {

  @PrimaryGeneratedColumn()
  private id_type_event:number;

  @Column()
  private type_name_event:string;

  @Column()
  private name_event:string;

  @Column()
  private content:string;

  @Column()
  private image_evenet:string;
}
