import {Utilisateur} from './utilisateur';
import {LieuReunion} from './lieu-reunion';

export interface SondagesLieuxResult {
  lien ?: string;
  lieux ?: string[];
  utilisateur ?: Utilisateur;
}

export class SondageLieu {
  constructor(private lien: string, private createur: Utilisateur, private lieuPossibles: LieuReunion[]) {}
  getLien(): string {
    return this.lien;
  }
  getCreateur(): Utilisateur {
    return this.createur;
  }
  getLieux(): LieuReunion[] {
    return this.lieuPossibles;
  }
}
