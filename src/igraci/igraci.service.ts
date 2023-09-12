import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Igrac } from './models/igrac.entity';
import { Repository } from 'typeorm/repository/Repository';
import { IgracDto } from './models/igrac.dto';
import { In, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class IgraciService {
  constructor(
    @InjectRepository(Igrac)
    private igracRepository: Repository<Igrac>,
  ) {}
 

  async getLastAddedIgrac(): Promise<Igrac | undefined> {
    try {
      const queryBuilder: SelectQueryBuilder<Igrac> = this.igracRepository.createQueryBuilder('igrac');
      const lastAddedIgrac = await queryBuilder
        .orderBy('igrac.id', 'DESC')
        .getOne();

      return lastAddedIgrac;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }


  public async dodajIgraca(igracDto: IgracDto) {
    const igrac = this.igracRepository.create(igracDto);
    return await this.igracRepository.save(igrac);
  }


  async getSviIgraci() {
    return this.igracRepository.find();
  }

  async getIgracById(igracId: number) {
    return this.igracRepository.findOneBy({ id: igracId });
  }

  async getIgraciByPozicija(pozicija: string, timId: number) {
    return this.igracRepository.find({ where: { timId, pozicija } });
  }

  async dodajIgracaUListuIgraca(igrac: Igrac, ciljaniTimId: number) {
    igrac.timId = ciljaniTimId;
    return this.igracRepository.save(igrac);
  }

  async getIgraciByIds(igraciIds: number[]) {
    return this.igracRepository.findBy({ id: In(igraciIds) });
  }
}

