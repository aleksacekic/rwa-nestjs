import { TimoviService } from './timovi.service';
import { TimDto } from './models/tim.dto';
export declare class TimoviController {
    private timoviService;
    constructor(timoviService: TimoviService);
    obrisiTim(id: number): Promise<void>;
    dodajTim(dto: TimDto): Promise<any>;
    dodajIgracaZamenama(timId: number, igracZamenaId: number): Promise<any>;
    getTimById(timId: number): Promise<any>;
    getSviTimovi(): Promise<any>;
    updateTimIgraci(timId: number, igraci: {
        teren: number[];
        zamena: number[];
    }): Promise<void>;
}
