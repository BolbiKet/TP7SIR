export class Utilisateur {
  constructor(private nom: string, private prenom: string, private email: string, private sondageCrees: string[], private sondageParticipes: string[]) {}

  getNom(): string {
    return this.nom;
  }

  getPrenom(): string {
    return this.prenom;
  }
  getMail(): string {
    return this.email;
  }
  getSondagesParticipes(): string[] {
    return this.sondageParticipes;
  }
  getSondagesCrees(): string[]{
    return this.sondageCrees;
  }
}
