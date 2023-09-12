import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tim } from './models/tim.entity';
import { Repository } from 'typeorm';
import { TimDto } from './models/tim.dto';
import { IgracDto } from 'src/igraci/models/igrac.dto';
import { Igrac } from 'src/igraci/models/igrac.entity';
import { IgraciService } from 'src/igraci/igraci.service';

@Injectable()
export class TimoviService {
  constructor(
    @InjectRepository(Tim)
    private timRepository: Repository<Tim>,
  // private igracRepository: Repository<Igrac>,
  // private igraciService:IgraciService
  ) {}



  async obrisiTim(id: number){
    const tim = await this.timRepository.findOneBy({id});
  
    await this.timRepository.remove(tim);
  }
  async dodajTim(timDto: TimDto) {
    const tim = this.timRepository.create({
      naziv: timDto.naziv,
      igraciTeren: [], // Ostavite prazne nizove
      igraciZamena: [],
    });
  
    const igraciTerenIds = timDto.igraciTeren;
    const igraciZamenaIds = timDto.igraciZamena;
  
    tim.igraciTeren = igraciTerenIds;
    tim.igraciZamena = igraciZamenaIds;
  
    return await this.timRepository.save(tim);
  }

  async dodajIgracaZamenama(timId: number, igracZamenaID: number) {
    const tim = await this.timRepository.findOneBy({ id: timId });
    tim.igraciZamena.push(igracZamenaID);
    return this.timRepository.save(tim);
  }


  async getTimById(timId: number) {
    return this.timRepository.findOneBy({ id: timId });
  }

  async getSviTimovi() {
    return this.timRepository.find();
  }

  async updateTimIgraci(
    timId: number,
    igraciTerenIds: number[],
    igraciZamenaIds: number[],
  ) {
    const tim = await this.timRepository.findOneBy({ id: timId });
    tim.igraciTeren = igraciTerenIds;
    tim.igraciZamena = igraciZamenaIds;
    await this.timRepository.save(tim);
  }
}