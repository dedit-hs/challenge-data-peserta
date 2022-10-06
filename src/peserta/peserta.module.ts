import { Module } from '@nestjs/common';
import { PesertaService } from './peserta.service';
import { PesertaController } from './peserta.controller';

@Module({
  controllers: [PesertaController],
  providers: [PesertaService],
})
export class PesertaModule {}
