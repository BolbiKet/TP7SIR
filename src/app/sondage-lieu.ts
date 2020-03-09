import {Utilisateur} from './utilisateur';

export class SondageLieu {
  constructor(private lien: string, private createur: Utilisateur, private participants: string[], private lieux: string[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getLieux(): string[] {
    return this.lieux;
  }
}
