import { Module } from '@nestjs/common';
import { IgraciController } from './igraci.controller';
import { IgraciService } from './igraci.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Igrac } from 'src/igraci/models/igrac.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Igrac])],
  controllers: [IgraciController],
  providers: [IgraciService],
})
export class IgraciModule {}
