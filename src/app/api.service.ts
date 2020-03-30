import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from "./utilisateur";
import {LieuReunion} from "./lieu-reunion";
import {DateReunion} from "./date-reunion";

interface UtilisateurResults {
  nom ?: string;
  prenom ?: string;
  mail ?: string;
  lienSondageCrees ?: string[];
  lienSondageParticipes ?: string[];
}

interface SondagesLieuxResult {
  lien ?: string;
  lieux ?: LieuReunion[];
  participants ?: string[];
  utilisateur ?: Utilisateur;
}

interface SondagesDatesResult {
  dates ?: DateReunion[];
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

  getUtilisateur(emailUtilisateur): Observable<UtilisateurResults> {
    return this.httpClient.get<UtilisateurResults>('http://localhost:4200/api/utilisateurs/' + emailUtilisateur);
  }

  getSondagesLieux(): Observable<SondagesLieuxResult[]> {
    return this.httpClient.get<SondagesLieuxResult[]>('http://localhost:4200/api/sondagesLieux');
  }

  getSondagesDates(): Observable<SondagesDatesResult[]> {
    return this.httpClient.get<SondagesDatesResult[]>('http://localhost:4200/api/sondagesDates');
  }

  createUser(user): Observable<UtilisateurResults> {
    return this.httpClient.post('http://localhost:4200/api/utilisateurs', user);
  }

  createSondageLieu(sondageLieu): Observable<SondagesLieuxResult>{
    return this.httpClient.post('http://localhost:4200/api/sondagesLieux', sondageLieu);
  }
  createSondageDate(sondageDate): Observable<SondagesDatesResult> {
    return this.httpClient.post('http://localhost:4200/api/sondagesDates', sondageDate);
  }
}
