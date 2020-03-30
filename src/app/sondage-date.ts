import {Utilisateur} from './utilisateur';
import {DateReunion} from './date-reunion';

export class SondageDate {
  constructor(private lien: string, private createur: Utilisateur, private participants: string[], private datesPossibles: DateReunion[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getDates(): DateReunion[] {
    return this.datesPossibles;
  }

}
