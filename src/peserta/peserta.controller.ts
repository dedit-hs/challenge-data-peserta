import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PesertaService } from './peserta.service';
import { CreatePesertaDto } from './dto/create-peserta.dto';
import { FilterGenderDto } from './dto/filter-peserta.dto';
import { genderStatus, Peserta } from './interfaces/peserta.model';
import { UpdateGenderPeserta } from './dto/update-gender-peserta.dto';

@Controller('peserta')
export class PesertaController {
  constructor(private readonly pesertaService: PesertaService) {}

  @Post()
  create(@Body() createPesertaDto: CreatePesertaDto) {
    return this.pesertaService.create(createPesertaDto);
  }

  @Get()
  findAll(@Query() filterGenderDto: FilterGenderDto): Peserta[] {
    if (Object.keys(filterGenderDto).length) {
      return this.pesertaService.filterPeserta(filterGenderDto);
    } else {
      return this.pesertaService.findAll();
    }
  }

  @Get('/:id')
  findById(@Param('id') id: string): Peserta {
    return this.pesertaService.findById(id);
  }

  @Delete('/:id')
  deletePeserta(@Param('id') id: string): void {
    return this.pesertaService.deletePeserta(id);
  }

  @Patch('/:id')
  updatePeserta(
    @Param('id') id: string,
    @Body() createPesertaDto: CreatePesertaDto,
    @Body('gender') genderPeserta: UpdateGenderPeserta,
  ): Peserta {
    const { gender } = genderPeserta;
    return this.pesertaService.updatePeserta(
      id,
      { ...createPesertaDto },
      gender,
    );
  }
}
