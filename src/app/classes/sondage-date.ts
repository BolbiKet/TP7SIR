import {Utilisateur} from './utilisateur';
import {DateDetails, DateReunion} from './date-reunion';

export interface SondagesDatesResult {
  dates ?: DateDetails[];
  lien ?: string;
  utilisateur ?: Utilisateur;
}

export class SondageDate {
  constructor(private lien: string, private createur: Utilisateur, private datesPossibles: DateReunion[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getDates(): DateReunion[] {
    return this.datesPossibles;
  }

}
