import { Igrac } from "src/igraci/models/igrac.entity";
import { Tim } from "src/timovi/timovi/models/tim.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IgraciTransferLista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ime: string;

  @Column()
  ocena: number;

  @Column()
  pozicija: string;

  @Column()
  cena: number;

  // Ostala polja...

  @ManyToOne(() => Tim, tim => tim.igraciZamena) // igrac moze pripadati samo jednom timu
  @JoinColumn({ name: "timId" })
  tim: Tim;
c;
}

