import {Utilisateur} from './utilisateur';

export class SondageDate {
  constructor(private lien: string, private createur: Utilisateur, private participants: string[], private dates: string[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getDates(): string[] {
    return this.dates;
  }

}
