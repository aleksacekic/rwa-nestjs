import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IgraciService } from './igraci.service';
import { IgracDto, IgraciIdsDto } from './models/igrac.dto';
import { Igrac } from './models/igrac.entity';
import { TimoviService } from 'src/timovi/timovi/timovi.service';

@Controller('igraci')
export class IgraciController {
  constructor(private igracService: IgraciService
) {}


@Get('lastAddedId')
async getLastAddedIgracId() {
  const lastAddedIgrac = await this.igracService.getLastAddedIgrac();
  return lastAddedIgrac.id;
}

  @Post()
  dodajIgraca(@Body() dto: IgracDto) {
    return this.igracService.dodajIgraca(dto);
  }

  @Get()
  getSviIgraci() {
    return this.igracService.getSviIgraci();
  }

  @Get(':id')
  getIgracById(@Param('id') igracId: number) {
    return this.igracService.getIgracById(igracId);
  }

  @Get(':pozicija/:timId')
  getIgraciByPozicija(
    @Param('pozicija') pozicija: string,
    @Param('timId') timId: number,
  ) {
    return this.igracService.getIgraciByPozicija(pozicija, timId);
  }
  

  @Post('dodajUListuIgraca/:ciljaniTimId')
  dodajIgracaUListuIgraca(
    @Body() igrac: Igrac,
    @Param('ciljaniTimId') ciljaniTimId: number,
  ) {
    return this.igracService.dodajIgracaUListuIgraca(igrac, ciljaniTimId);
  }

  @Post('getIgraciByIds')
  getIgraciByIds(@Body() igraciIdsDto: IgraciIdsDto) {
    return this.igracService.getIgraciByIds(igraciIdsDto.igraciIds);
  }
}
