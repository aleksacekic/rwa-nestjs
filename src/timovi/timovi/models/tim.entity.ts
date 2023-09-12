import { Igrac } from "src/igraci/models/igrac.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  naziv: string;
  @Column('int', { array: true, nullable: true })
  igraciTeren: number[] | null;
  
  @Column('int', { array: true, nullable: true })
  igraciZamena: number[] | null;
  
  @OneToMany(() => Igrac, (igrac) => igrac.tim)
  igraci: Igrac[];

}

