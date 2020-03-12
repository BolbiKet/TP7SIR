import { Component, OnInit } from '@angular/core';
import {SondageLieu} from "../sondage-lieu";
import {APIService} from "../api.service";
import {Utilisateur} from "../utilisateur";
import {SondageDate} from "../sondage-date";

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
    if (this.typeS === 'lieu') {
      const lieux: string[] = [this.lieuR1, this.lieuR2, this.lieuR3];
      const sondageL: SondageLieu = new SondageLieu(this.lienS, this.mailC, null, lieux);
      this.apiService.createSondageLieu(sondageL);
    } else {
      const dates: string[] = [this.date1, this.date2, this.date3];
      const sondageD: SondageDate = new SondageDate(this.lienS, this.mailC, null, dates);
      this.apiService.createSondageDate(sondageD);
    }
  }

}
