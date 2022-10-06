import { IsEnum } from 'class-validator';
import { genderStatus } from '../interfaces/peserta.model';

export class UpdateGenderPeserta {
  @IsEnum(genderStatus)
  gender: genderStatus;
}
