import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IgraciTransferListaService } from './igraci-transfer-lista.service';
import { IgraciTransferLista } from '../models/igracTransferLista.entity';
import { IgracDto } from 'src/igraci/models/igrac.dto';

@Controller('igraciTransferLista')
export class IgraciTransferListaController {
  constructor(private igraciTransferListaService: IgraciTransferListaService) {}

  @Post()
  dodajIgracaTransfer(@Body() dto: IgracDto) {
    return this.igraciTransferListaService.dodajIgracaTransferLista(dto);
  }

  @Get()
  getIgraciTransferLista() {
    return this.igraciTransferListaService.getIgraciTransferLista();
  }

  @Delete(':id')
  ukloniIgracaSaTransferListe(@Param('id', ParseIntPipe) id: number) {
    return this.igraciTransferListaService.ukloniIgracaSaTransferListe(id);
  }

  @Put()
  updateIgraciTransferLista(@Body() igraci: IgraciTransferLista[]){
    return this.igraciTransferListaService.updateIgraciTransferLista(igraci);
  }
}
