import { Tim } from 'src/timovi/timovi/models/tim.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('korisnici')
export class Korisnik {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ime: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  virtuelniNovac: number;

  @Column({ unique: true })
  timId: number;

  @OneToOne(() => Tim)
  @JoinColumn({ name: 'timId' })
  tim: Tim;
}


