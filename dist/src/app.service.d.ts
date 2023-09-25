import { Repository } from 'typeorm';
import { Korisnik } from './korisnici/models/korisnik.entity';
import { Tim } from './timovi/timovi/models/tim.entity';
export declare class AppService {
    private readonly korisnikRepository;
    private readonly timRepository;
    constructor(korisnikRepository: Repository<Korisnik>, timRepository: Repository<Tim>);
    create(data: any): Promise<Korisnik>;
    findOne(condition: any): Promise<Korisnik>;
    createTim(data: any): Promise<Tim>;
}
