import {Utilisateur} from './utilisateur';

export class SondageDate {
  constructor(private lien: string, private createur: string, private participants: string[], private dates: string[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): string {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getDates(): string[] {
    return this.dates;
  }

}
