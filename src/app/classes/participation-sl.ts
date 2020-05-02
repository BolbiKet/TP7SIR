import {Utilisateur} from './utilisateur';
import {LieuReunion} from './lieu-reunion';
import {SondageLieu} from './sondage-lieu';

export class ParticipationSL {
  constructor(private nom: string, private prenom: string, private participant: Utilisateur, private lieuChoisi: LieuReunion, private sondage: SondageLieu) {
  }

  getNom(): string {
    return this.nom;
  }

  getPrenom(): string {
    return this.prenom;
  }

  getParticipant(): Utilisateur {
    return this.participant;
  }

  getLieuChoisi(): LieuReunion {
    return this.lieuChoisi;
  }

  getSondage(): SondageLieu {
    return this.sondage;
  }
}
