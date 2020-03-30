import {Utilisateur} from './utilisateur';
import {LieuReunion} from './lieu-reunion';

export class SondageLieu {
  constructor(private lien: string, private createur: Utilisateur, private participants: string[], private lieuPossibles: LieuReunion[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getParticipants(): string[] {
    return this.participants;
  }
  getLieux(): LieuReunion[] {
    return this.lieuPossibles;
  }
}
