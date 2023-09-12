import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Korisnik } from './korisnici/models/korisnik.entity';
import { Tim } from './timovi/timovi/models/tim.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Korisnik) private readonly korisnikRepository: Repository<Korisnik>,
    @InjectRepository(Tim) private readonly timRepository: Repository<Tim>,
  ) {}

  async create(data: any): Promise<Korisnik> {
    return this.korisnikRepository.save(data);
  }

  async findOne(condition: any): Promise<Korisnik> {
    return this.korisnikRepository.findOne(condition);
  }

  async createTim(data: any): Promise<Tim> {
    const noviTim = new Tim();
    noviTim.naziv = "FK " + data.ime; //
    noviTim.igraciZamena = [];
    noviTim.igraciTeren = [];

    return this.timRepository.save(noviTim);
  }
}
