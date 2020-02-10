import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from './utilisateur';
import {Observable} from 'rxjs';

interface UtilisateurResults {
  nom?: string;
  prenom?: string;
  mail ?: string;
}

interface IUtilisateursResults {
  results?: UtilisateurResults[];
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient: HttpClient) { }

  getUtilisateurs(): Observable<UtilisateurResults[]> {
    return this.httpClient.get<UtilisateurResults[]>('http://localhost:4200/api/utilisateurs');
  }
}
