export class Utilisateur {
  constructor(private nom: string, private prenom: string, private mail: string, private sondagesCrees: string[], private sondagesParticipes: string[]) {}

  getNom(): string {
    return this.nom;
  }
  getPrenom(): string {
    return this.prenom;
  }
  getMail(): string {
    return this.mail;
  }
  getSondages(): string[] {
    return this.sondagesParticipes;
  }
  getSondagesCrees(): string[] {
    return this.sondagesCrees;
  }
}
