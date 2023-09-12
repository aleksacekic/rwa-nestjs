import {
  Controller,
  Param,
  Put,
  Get,
  Body,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { TimoviService } from './timovi.service';
import { Tim } from './models/tim.entity';
import { TimDto } from './models/tim.dto';

@Controller('timovi')
export class TimoviController {
  constructor(private timoviService: TimoviService) {}

  // 
  @Delete(':id')
  obrisiTim(@Param('id') id: number) {
    return this.timoviService.obrisiTim(id);
  }

  // 
  @Post()
  dodajTim(@Body() dto: TimDto) {
    return this.timoviService.dodajTim(dto);
}
  // 
  @Put(':timId/dodajIgracaZamenama/:igracZamenaId')
  async dodajIgracaZamenama(
    @Param('timId', ParseIntPipe) timId: number,
    @Param('igracZamenaId', ParseIntPipe) igracZamenaId: number,
  )
  {
    return this.timoviService.dodajIgracaZamenama(timId, igracZamenaId);
  }
  // 
  @Get(':timId')
  async getTimById(@Param('timId', ParseIntPipe) timId: number) {
    return this.timoviService.getTimById(timId);
  }

  // 
  @Get()
  async getSviTimovi() {
    return this.timoviService.getSviTimovi();
  }
// 
  @Put(':timId/updateIgraci')
  async updateTimIgraci(
    @Param('timId', ParseIntPipe) timId: number,
    @Body() igraci: { teren: number[]; zamena: number[] },
  ) {
    await this.timoviService.updateTimIgraci(
      timId,
      igraci.teren,
      igraci.zamena,
    );
  }
}
