import {SondageLieu} from './sondage-lieu';

export interface LieuDetails {
  nomLieu: string;
}

export class LieuReunion {
  constructor(private nomLieu: string) {
  }
  getNomLieu(): string {
    return this.nomLieu;
  }
}
