import { Module } from '@nestjs/common';
import { KorisniciController } from './korisnici.controller';
import { KorisniciService } from './korisnici.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Korisnik } from './models/korisnik.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Korisnik])],
  controllers: [KorisniciController],
  providers: [KorisniciService],
})

export class KorisniciModule {}
