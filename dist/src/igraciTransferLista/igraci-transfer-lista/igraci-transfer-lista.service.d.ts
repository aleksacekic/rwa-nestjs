import { IgraciTransferLista } from '../models/igracTransferLista.entity';
import { Repository } from 'typeorm';
import { igraciTransferListaDto } from '../models/igracTransferLista.dto';
export declare class IgraciTransferListaService {
    private igraciTransferListaRepository;
    constructor(igraciTransferListaRepository: Repository<IgraciTransferLista>);
    dodajIgracaTransferLista(igracTLDto: igraciTransferListaDto): Promise<any>;
    getIgraciTransferLista(): Promise<any>;
    ukloniIgracaSaTransferListe(igracId: number): Promise<void>;
    updateIgraciTransferLista(igraci: IgraciTransferLista[]): Promise<void>;
}
