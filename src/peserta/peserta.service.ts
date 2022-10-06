import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePesertaDto } from './dto/create-peserta.dto';
import { FilterGenderDto } from './dto/filter-peserta.dto';
import { genderStatus, Peserta } from './interfaces/peserta.model';

@Injectable()
export class PesertaService {
  private peserta: Peserta[] = [];
  create(createPesertaDto: CreatePesertaDto): Peserta {
    const { name, moto, cv } = createPesertaDto;
    const peserta: Peserta = {
      id: uuid(),
      name,
      moto,
      cv,
      gender: genderStatus.PRIA,
    };
    this.peserta.push(peserta);
    return peserta;
  }

  findAll(): Peserta[] {
    return this.peserta;
  }

  filterPeserta(filterGenderDto: FilterGenderDto): Peserta[] {
    const { gender, search } = filterGenderDto;
    let peserta = this.findAll();

    if (gender) {
      peserta = peserta.filter((peserta) => peserta.gender === gender);
    }

    if (search) {
      peserta = peserta.filter((peserta) => {
        if (peserta.name.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return peserta;
  }

  findById(id: string): Peserta {
    const found = this.peserta.find((peserta) => peserta.id === id);
    if (!found) {
      throw new NotFoundException('Peserta tidak ditemukan.');
    }
    return this.peserta.find((peserta) => peserta.id === id);
  }

  deletePeserta(id: string): void {
    const found = this.findById(id);
    this.peserta = this.peserta.filter((peserta) => peserta.id !== found.id);
  }

  updatePeserta(
    id: string,
    createPesertaDto: CreatePesertaDto,
    gender: genderStatus,
  ) {
    const peserta = this.findById(id);
    const { name, moto, cv } = createPesertaDto;
    peserta.name = name;
    peserta.moto = moto;
    peserta.cv = cv;
    peserta.gender = gender;
    return peserta;
  }
}
