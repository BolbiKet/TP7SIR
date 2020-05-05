import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur, UtilisateurResults} from './classes/utilisateur';
import {SondageDate, SondagesDatesResult} from './classes/sondage-date';
import {SondageLieu, SondagesLieuxResult} from './classes/sondage-lieu';
import {ParticipationSL} from './classes/participation-sl';
import {ParticipationSD} from './classes/participation-sd';
import {LieuDetails} from './classes/lieu-reunion';
import {DateDetails} from './classes/date-reunion';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url = 'http://localhost:4200/api/';

  constructor(private httpClient: HttpClient) { }

  // GET methods
  getUtilisateurs(): Observable<UtilisateurResults[]> {
    return this.httpClient.get<UtilisateurResults[]>(this.url + 'utilisateurs');
  }
  getUtilisateur(emailUtilisateur): Observable<UtilisateurResults> {
    return this.httpClient.get<UtilisateurResults>(this.url + 'utilisateurs/' + emailUtilisateur);
  }
  getSondagesLieux(): Observable<SondagesLieuxResult[]> {
    return this.httpClient.get<SondagesLieuxResult[]>(this.url + 'sondagesLieux');
  }
  getSondagesDates(): Observable<SondagesDatesResult[]> {
    return this.httpClient.get<SondagesDatesResult[]>(this.url + 'sondagesDates');
  }
  getLieu(lienS: string, lieu: string): Observable<LieuDetails> {
    return this.httpClient.get<LieuDetails>(this.url + 'lieu/' + lienS + '/' + lieu);
  }
  getDate(lienS: string, date: string): Observable<DateDetails> {
    return this.httpClient.get<DateDetails>(this.url + 'date/' + lienS + '/' + date);
  }
  getSondageLieuByLien(lienSondage: string): Observable<SondagesLieuxResult> {
    return this.httpClient.get<SondagesLieuxResult>(this.url + 'sondagesLieux/' + lienSondage);
  }
  getSondageDatesByLien(lienSondage: string): Observable<SondagesDatesResult> {
    return this.httpClient.get<SondagesDatesResult>(this.url + 'sondagesDates/' + lienSondage);
  }
  getCountParticipationSL(): Observable<any> {
    return this.httpClient.get<any>(this.url + 'participationSondageLieux/count');
  }
  getCountParticipationSD(): Observable<any> {
    return this.httpClient.get<any>(this.url + 'participationSondageDates/count');
  }

  // POST methods
  createUser(user: Utilisateur): Observable<UtilisateurResults> {
    return this.httpClient.post(this.url + 'utilisateurs', user);
  }
  createSondageLieu(sondageLieu: SondageLieu): Observable<SondagesLieuxResult> {
    return this.httpClient.post(this.url + 'sondagesLieux', sondageLieu);
  }
  createSondageDate(sondageDate: SondageDate): Observable<SondagesDatesResult> {
    return this.httpClient.post(this.url + 'sondagesDates', sondageDate);
  }
  createParticipationSL(participationSL: ParticipationSL) {
    return this.httpClient.post(this.url + 'participationSondageLieux', participationSL);
  }
  createParticipationSD(participationSD: ParticipationSD) {
    return this.httpClient.post(this.url + 'participationSondageDates', participationSD);
  }
}
