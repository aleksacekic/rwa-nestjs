import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { KorisniciService } from './korisnici.service';
import { Korisnik } from './models/korisnik.entity';
import { KorisnikDto } from './models/korisnik.dto';

@Controller('korisnici')
export class KorisniciController {
  constructor(private korisnikService: KorisniciService) {}
// @Param('id', ParseIntPipe) id:number

  @Post()
  dodajIgraca(@Body() dto: KorisnikDto) {
    return this.korisnikService.dodajKorisnika(dto);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.korisnikService.findOne(id);
  }

  @Put(':id/virtuelniNovac')
  updateVirtuelniNovac(
    @Param('id', ParseIntPipe) id: number,
    @Body('novoStanjeNovca') novoStanjeNovca: number,
    @Body('IDtima') IDtima: number)
  {
    return this.korisnikService.updateVirtuelniNovac(
      id,
      novoStanjeNovca,
      IDtima,
    );
  }

  @Put(':id')
  updateTrenutniKorisnik(
    @Param('id', ParseIntPipe) id: number,
    @Body() korisnik: Korisnik,
  ) {
    korisnik.id = id;
    return this.korisnikService.updateTrenutniKorisnik(korisnik);
  }

}
