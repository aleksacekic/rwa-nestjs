import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IgraciTransferLista } from '../models/igracTransferLista.entity';
import { Repository } from 'typeorm';
import { igraciTransferListaDto } from '../models/igracTransferLista.dto';

@Injectable()
export class IgraciTransferListaService {
  constructor(
    @InjectRepository(IgraciTransferLista)
    private igraciTransferListaRepository: Repository<IgraciTransferLista>,
  ) {}

  async dodajIgracaTransferLista(igracTLDto: igraciTransferListaDto) {
    const igrac=this.igraciTransferListaRepository.create(igracTLDto);
    return await this.igraciTransferListaRepository.save(igrac);
  }

  async getIgraciTransferLista() {
    return this.igraciTransferListaRepository.find();
  }

  async ukloniIgracaSaTransferListe(igracId: number) {
    await this.igraciTransferListaRepository.delete(igracId);
  }

  async updateIgraciTransferLista(igraci: IgraciTransferLista[]) {
    await this.igraciTransferListaRepository.save(igraci);
  }
}
