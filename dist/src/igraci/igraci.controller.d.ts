import { IgraciService } from './igraci.service';
import { IgracDto, IgraciIdsDto } from './models/igrac.dto';
import { Igrac } from './models/igrac.entity';
export declare class IgraciController {
    private igracService;
    constructor(igracService: IgraciService);
    getLastAddedIgracId(): Promise<number>;
    dodajIgraca(dto: IgracDto): Promise<any>;
    getSviIgraci(): Promise<any>;
    getIgracById(igracId: number): Promise<any>;
    getIgraciByPozicija(pozicija: string, timId: number): Promise<any>;
    dodajIgracaUListuIgraca(igrac: Igrac, ciljaniTimId: number): Promise<any>;
    getIgraciByIds(igraciIdsDto: IgraciIdsDto): Promise<any>;
}
