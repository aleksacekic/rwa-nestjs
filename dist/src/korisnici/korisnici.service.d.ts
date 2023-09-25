import { Korisnik } from './models/korisnik.entity';
import { Repository } from 'typeorm';
import { KorisnikDto } from './models/korisnik.dto';
export declare class KorisniciService {
    private korisnikRepository;
    constructor(korisnikRepository: Repository<Korisnik>);
    dodajKorisnika(korisnikDto: KorisnikDto): Promise<any>;
    findOne(id: number): Promise<any>;
    updateVirtuelniNovac(id: number, novoStanjeNovca: number, IDtima: number): Promise<any>;
    updateTrenutniKorisnik(korisnik: Korisnik): Promise<any>;
}
