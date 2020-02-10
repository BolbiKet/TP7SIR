export class Utilisateur {
  constructor(private nom: string, private prenom: string, private email: string) {}

  getNom() {
    return this.nom;
  }

  getPrenom() {
    return this.prenom;
  }
  getMail() {
    return this.email;
  }
}
