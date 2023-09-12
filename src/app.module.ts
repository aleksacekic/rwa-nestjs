import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IgraciModule } from './igraci/igraci.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { IgraciTransferListaModule } from './igraciTransferLista/igraci-transfer-lista/igraci-transfer-lista.module';
import { KorisniciModule } from './korisnici/korisnici.module';
import { TimoviModule } from './timovi/timovi/timovi.module';
import { JwtModule } from '@nestjs/jwt';
import { Korisnik } from './korisnici/models/korisnik.entity';
import { Tim } from './timovi/timovi/models/tim.entity';

@Module({
  imports: [
    IgraciModule,
    IgraciTransferListaModule,
    KorisniciModule,
    TimoviModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Korisnik,Tim]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  // OVIM SMO POVEZALI NA BAZU
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
