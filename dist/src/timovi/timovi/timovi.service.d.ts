import { Tim } from './models/tim.entity';
import { Repository } from 'typeorm';
import { TimDto } from './models/tim.dto';
export declare class TimoviService {
    private timRepository;
    constructor(timRepository: Repository<Tim>);
    obrisiTim(id: number): Promise<void>;
    dodajTim(timDto: TimDto): Promise<any>;
    dodajIgracaZamenama(timId: number, igracZamenaID: number): Promise<any>;
    getTimById(timId: number): Promise<any>;
    getSviTimovi(): Promise<any>;
    updateTimIgraci(timId: number, igraciTerenIds: number[], igraciZamenaIds: number[]): Promise<void>;
}
