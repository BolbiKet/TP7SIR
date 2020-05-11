import {PrefAlim, PreferencesDetails} from './pref-alim';
import {Allergie, AllergiesDetails} from './allergie';

export interface UtilisateurResults {
  nom ?: string;
  prenom ?: string;
  mail ?: string;
  lienSondageCrees ?: string[];
  allergies?: AllergiesDetails[];
  preferences?: PreferencesDetails[];
}

export class Utilisateur {
  constructor(private nom: string, private prenom: string, private mail: string) {}

  getNom(): string {
    return this.nom;
  }
  getPrenom(): string {
    return this.prenom;
  }
  getMail(): string {
    return this.mail;
  }
}

export class UtilisateurDetails {
  constructor(private nom: string, private prenom: string, private mail: string, private sondagesCrees: string[], private allergies: Allergie[], private preferences: PrefAlim[]) {}

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
    return this.sondagesCrees;
  }
  getAllergies(): Allergie[] {
    return this.allergies;
  }
  getPrefAlims(): PrefAlim[] {
    return this.preferences;
  }
}

