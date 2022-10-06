export interface Peserta {
  id: string;
  name: string;
  moto: string;
  cv: string;
  gender: genderStatus;
}

export enum genderStatus {
  PRIA = 'PRIA',
  WANITA = 'WANITA',
}
