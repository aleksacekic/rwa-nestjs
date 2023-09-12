import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Korisnik } from './models/korisnik.entity';
import { Repository } from 'typeorm';
import { KorisnikDto } from './models/korisnik.dto';

@Injectable()
export class KorisniciService {
  constructor(
    @InjectRepository(Korisnik)
    private korisnikRepository: Repository<Korisnik>,
  ) {}

  async dodajKorisnika(korisnikDto: KorisnikDto) {
    const korisnik = this.korisnikRepository.create(korisnikDto);
    return await this.korisnikRepository.save(korisnik);
  }

  async findOne(id: number) {
    return this.korisnikRepository.findOneBy({ id });
  }

  async updateVirtuelniNovac(
    id: number,
    novoStanjeNovca: number,
    IDtima: number,
  ) {
    const korisnik = await this.korisnikRepository.findOneBy({ id });
    if (!korisnik) {
      throw new Error('Korisnik nije pronadjen');
    }

    korisnik.virtuelniNovac = novoStanjeNovca;
    korisnik.timId = IDtima;

    return this.korisnikRepository.save(korisnik);
  }

  async updateTrenutniKorisnik(korisnik: Korisnik) {
    return this.korisnikRepository.save(korisnik);
  }

}
