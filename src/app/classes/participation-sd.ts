import {Utilisateur} from './utilisateur';
import {DateReunion} from './date-reunion';
import {SondageDate} from './sondage-date';

export class ParticipationSD {
  constructor(private nom: string, private prenom: string, private participant: Utilisateur, private dateChoisie: DateReunion, private sondage: SondageDate) {
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

  getDateChoisie(): DateReunion {
    return this.dateChoisie;
  }

  getSondage(): SondageDate {
    return this.sondage;
  }
}
