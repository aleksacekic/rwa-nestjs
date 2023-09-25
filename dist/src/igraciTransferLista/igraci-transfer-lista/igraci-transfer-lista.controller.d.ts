import { IgraciTransferListaService } from './igraci-transfer-lista.service';
import { IgraciTransferLista } from '../models/igracTransferLista.entity';
import { IgracDto } from 'src/igraci/models/igrac.dto';
export declare class IgraciTransferListaController {
    private igraciTransferListaService;
    constructor(igraciTransferListaService: IgraciTransferListaService);
    dodajIgracaTransfer(dto: IgracDto): Promise<any>;
    getIgraciTransferLista(): Promise<any>;
    ukloniIgracaSaTransferListe(id: number): Promise<void>;
    updateIgraciTransferLista(igraci: IgraciTransferLista[]): Promise<void>;
}
