import { IsNotEmpty } from 'class-validator';

export class CreatePesertaDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  moto: string;

  @IsNotEmpty()
  cv: string;
}
