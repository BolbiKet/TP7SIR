import {SondageLieu} from './sondage-lieu';

export interface LieuDetails {
  nomLieu: string;
  sondages: string[];
}

export class LieuReunion {
  constructor(private nomLieu: string, private sondages: SondageLieu[]) {
  }
  getNomLieu(): string {
    return this.nomLieu;
  }
  getSondages(): SondageLieu [] {
    return this.sondages;
  }
}
