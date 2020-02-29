import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  utilisateur ?: string;
}

interface SondagesDatesResult {
  dates ?: string [];
  lien ?: string;
  participants ?: string[];
  utilisateur ?: string;
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
    return this.httpClient.get<SondagesLieuxResult[]>('http://localhost:4200/api/sondages/sondagesLieux');
  }

  getSondagesDates(): Observable<SondagesDatesResult[]> {
    return this.httpClient.get<SondagesDatesResult[]>('http://localhost:4200/api/sondages/sondagesDates');
  }

  createUser(user) {
    return this.httpClient.post('http://localhost:4200/api/utilisateurs', user);
  }

  createSondageLieu(sondageLieu) {
    return this.httpClient.post('http://localhost:4200/api/sondages/sondagesLieux', sondageLieu);
  }
}
