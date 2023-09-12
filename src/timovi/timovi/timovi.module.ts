import { Module } from '@nestjs/common';
import { TimoviController } from './timovi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tim } from './models/tim.entity';
import { TimoviService } from './timovi.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tim])],
  controllers: [TimoviController],
  providers: [TimoviService],
})
export class TimoviModule {}
