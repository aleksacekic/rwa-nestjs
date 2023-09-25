import { Igrac } from './models/igrac.entity';
import { Repository } from 'typeorm/repository/Repository';
import { IgracDto } from './models/igrac.dto';
export declare class IgraciService {
    private igracRepository;
    constructor(igracRepository: Repository<Igrac>);
    getLastAddedIgrac(): Promise<Igrac | undefined>;
    dodajIgraca(igracDto: IgracDto): Promise<any>;
    getSviIgraci(): Promise<any>;
    getIgracById(igracId: number): Promise<any>;
    getIgraciByPozicija(pozicija: string, timId: number): Promise<any>;
    dodajIgracaUListuIgraca(igrac: Igrac, ciljaniTimId: number): Promise<any>;
    getIgraciByIds(igraciIds: number[]): Promise<any>;
}
