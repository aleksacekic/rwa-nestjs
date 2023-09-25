import { KorisniciService } from './korisnici.service';
import { Korisnik } from './models/korisnik.entity';
import { KorisnikDto } from './models/korisnik.dto';
export declare class KorisniciController {
    private korisnikService;
    constructor(korisnikService: KorisniciService);
    dodajIgraca(dto: KorisnikDto): Promise<any>;
    findOne(id: number): Promise<any>;
    updateVirtuelniNovac(id: number, novoStanjeNovca: number, IDtima: number): Promise<any>;
    updateTrenutniKorisnik(id: number, korisnik: Korisnik): Promise<any>;
}
