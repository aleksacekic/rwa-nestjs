import { Module } from '@nestjs/common';
import { IgraciTransferListaService } from './igraci-transfer-lista.service';
import { IgraciTransferListaController } from './igraci-transfer-lista.controller';
import { IgraciTransferLista } from '../models/igracTransferLista.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IgraciTransferLista])],
  controllers: [IgraciTransferListaController],
  providers: [IgraciTransferListaService],
})
export class IgraciTransferListaModule {}
