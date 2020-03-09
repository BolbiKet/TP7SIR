import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from './utilisateur';

interface UtilisateurResults {
  nom ?: string;
  prenom ?: string;
  mail ?: string;
  lienSondageCrees ?: string[];
  lienSondageParticipes ?: string[];
}

interface SondagesLieuxResult {
  lien ?: string;
  lieux ?: string[];
  participants ?: string[];
  utilisateur ?: Utilisateur;
}

interface SondagesDatesResult {
  dates ?: string [];
  lien ?: string;
  participants ?: string[];
  utilisateur ?: Utilisateur;
}
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient: HttpClient) { }

  getUtilisateurs(): Observable<UtilisateurResults[]> {
    return this.httpClient.get<UtilisateurResults[]>('http://localhost:4200/api/utilisateurs');
  }

  getSondagesLieux(): Observable<SondagesLieuxResult[]> {
    return this.httpClient.get<SondagesLieuxResult[]>('http://localhost:4200/api/sondagesLieux');
  }

  getSondagesDates(): Observable<SondagesDatesResult[]> {
    return this.httpClient.get<SondagesDatesResult[]>('http://localhost:4200/api/sondagesDates');
  }

  createUser(user) {
    return this.httpClient.post('http://localhost:4200/api/utilisateurs', user);
  }

  createSondageLieu(sondageLieu) {
    return this.httpClient.post('http://localhost:4200/api/sondagesLieux', sondageLieu);
  }
}
