export interface UtilisateurResults {
  nom ?: string;
  prenom ?: string;
  mail ?: string;
  lienSondageCrees ?: string[];
  lienSondageParticipes ?: string[];
}

export class Utilisateur {
  constructor(private nom: string, private prenom: string, private mail: string, private sondagesCrees: string[]) {}

  getNom(): string {
    return this.nom;
  }
  getPrenom(): string {
    return this.prenom;
  }
  getMail(): string {
    return this.mail;
  }
  getSondagesCrees(): string[] {
    return this.sondagesCrees;
  }
}
