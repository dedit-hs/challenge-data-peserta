import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PesertaModule } from './peserta/peserta.module';

@Module({
  imports: [PesertaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
