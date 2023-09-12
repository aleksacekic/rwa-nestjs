import { Igrac } from "src/igraci/models/igrac.entity";
import { IgraciTransferLista } from "src/igraciTransferLista/models/igracTransferLista.entity";
import { Korisnik } from "src/korisnici/models/korisnik.entity";
import { Tim } from "src/timovi/timovi/models/tim.entity";
import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions = {
  type:"postgres",
  host:"localhost",
  port:5432,
  username:"postgres",
  password:"mysecretpassword",
  database:"igraci",
  entities:[Igrac, Tim, IgraciTransferLista, Korisnik],
  synchronize:true
};

  // OVIM SMO POVEZALI NA BAZU