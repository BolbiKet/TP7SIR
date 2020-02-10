import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from './utilisateur';
import {Observable} from 'rxjs';
import {Sondage} from "./sondage";

interface UtilisateurResults {
  nom ?: string;
  prenom ?: string;
  mail ?: string;
  lienSondageCrees ?: string[];
  lienSondageParticipes ?: string[];
}

interface SondageResult {
  lien ?: string;
  utilisateur ?: string;
  participants ?: string[];
}
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient: HttpClient) { }

  getUtilisateurs(): Observable<UtilisateurResults[]> {
    return this.httpClient.get<UtilisateurResults[]>('http://localhost:4200/api/utilisateurs');
  }

  getSondages(): Observable<SondageResult[]> {
    return this.httpClient.get<SondageResult[]>('http://localhost:4200/api/sondages');
  }
}
