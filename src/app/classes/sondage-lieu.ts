import {Utilisateur} from './utilisateur';
import {LieuDetails, LieuReunion} from './lieu-reunion';

export interface SondagesLieuxResult {
  lien ?: string;
  lieux ?: LieuDetails[];
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
