import { Tim } from 'src/timovi/timovi/models/tim.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Igrac {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ime: string;

  @Column()
  ocena: number;

  @Column()
  pozicija: string;

  @ManyToOne(() => Tim, (tim) => tim.igraci)
  tim: Tim;


  @Column()
  cena: number;

  @Column()
  timId: number;
}
