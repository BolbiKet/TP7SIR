import { Component, OnInit } from '@angular/core';
import {SondageLieu} from "../sondage-lieu";
import {APIService} from "../api.service";
import {Utilisateur} from "../utilisateur";
import {SondageDate} from "../sondage-date";
import {LieuReunion} from "../lieu-reunion";
import {DateReunion} from "../date-reunion";

@Component({
  selector: 'app-sondage-creation',
  templateUrl: './sondage-creation.component.html',
  styleUrls: ['./sondage-creation.component.css']
})
export class SondageCreationComponent implements OnInit {

  lienS: string = '';
  mailC: string = '';
  lieuR1: string = '';
  lieuR2: string = '';
  lieuR3: string = '';
  typeS: string = '';
  date1: string = '';
  date2: string = '';
  date3: string = '';

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createSondage() {
    const utilisateur: Utilisateur = new Utilisateur(null, null, this.mailC, null, null);
    if (this.typeS === 'lieu') {
      this.createSondageLieu(utilisateur);
    } else {
      this.createSondageDate(utilisateur);
    }
  }

  private createSondageLieu(utilisateur) {
    const lieu1: LieuReunion = new LieuReunion(this.lieuR1);
    const lieu2: LieuReunion = new LieuReunion(this.lieuR2);
    const lieu3: LieuReunion = new LieuReunion(this.lieuR3);
    const lieux: LieuReunion[] = [lieu1, lieu2, lieu3];

    const sondageL: SondageLieu = new SondageLieu(this.lienS, utilisateur, null, lieux);
    this.apiService.createSondageLieu(sondageL).subscribe(data => {
      console.log ('Sondage de type lieu crée : ' + data.lien);
    });
  }

  private createSondageDate(utilisateur) {
    const dateR1: DateReunion = new DateReunion(this.date1);
    const dateR2: DateReunion = new DateReunion(this.date2);
    const dateR3: DateReunion = new DateReunion(this.date3);
    const dates: DateReunion[] = [dateR1, dateR2, dateR3];
    const sondageD: SondageDate = new SondageDate(this.lienS, utilisateur, null, dates);
    this.apiService.createSondageDate(sondageD).subscribe(data => {
      console.log('Sondage de type date crée : ' + data.lien);
    });
  }

}
