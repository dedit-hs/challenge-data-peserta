import { IsEnum, IsOptional, IsString } from 'class-validator';
import { genderStatus } from '../interfaces/peserta.model';

export class FilterGenderDto {
  @IsOptional()
  @IsEnum(genderStatus)
  gender?: genderStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
