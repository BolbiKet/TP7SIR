import { Component, OnInit } from '@angular/core';
import {SondageLieu} from '../classes/sondage-lieu';
import {APIService} from '../api.service';
import {Utilisateur} from '../classes/utilisateur';
import {SondageDate} from '../classes/sondage-date';
import {LieuReunion} from '../classes/lieu-reunion';
import {DateReunion} from '../classes/date-reunion';
import {NgForm} from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sondage-creation',
  templateUrl: './sondage-creation.component.html',
  styleUrls: ['./sondage-creation.component.css']
})
export class SondageCreationComponent implements OnInit {

  linkS = '';
  mailC = '';
  placeR1 = '';
  placeR2 = '';
  placeR3 = '';
  typeS = '';
  date1: NgbDateStruct;
  date2: NgbDateStruct;
  date3: NgbDateStruct;
  break1 = false;
  break2 = false;
  break3 = false;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  date: {year: number, month: number};
  today = this.calendar.getToday();

  constructor(private apiService: APIService, private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  createSondage(sondageForm: NgForm) {
    this.apiService.getUtilisateur(this.mailC).subscribe(data => {
      const user = new Utilisateur(data.nom, data.prenom, data.mail);
      if (this.typeS === 'lieu') {
        this.createSondageLieu(user, sondageForm);
      } else {
        this.createSondageDate(user, sondageForm);
      }
    });
  }

  private createSondageLieu(user: Utilisateur, sondageForm: NgForm) {
    const place1: LieuReunion = new LieuReunion(this.placeR1);
    const place2: LieuReunion = new LieuReunion(this.placeR2);
    const place3: LieuReunion = new LieuReunion(this.placeR3);
    const places: LieuReunion[] = [place1, place2, place3];

    const sondageL: SondageLieu = new SondageLieu(this.linkS, user, places);
    this.apiService.createSondageLieu(sondageL).subscribe(data => {
      alert ('Sondage de type lieu crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }

  private createSondageDate(user: Utilisateur, sondageForm: NgForm) {
    const dateR1: DateReunion = new DateReunion(this.date1.day + '-' + this.date1.month + '-' + this.date1.year, this.break1);
    const dateR2: DateReunion = new DateReunion(this.date2.day + '-' + this.date2.month + '-' + this.date2.year, this.break2);
    const dateR3: DateReunion = new DateReunion(this.date3.day + '-' + this.date3.month + '-' + this.date3.year, this.break3);
    const dates: DateReunion[] = [dateR1, dateR2, dateR3];
    const sondageD: SondageDate = new SondageDate(this.linkS, user, dates);
    this.apiService.createSondageDate(sondageD).subscribe(data => {
      alert ('Sondage de type date crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }

  resetForm(sondageForm: NgForm) {
    sondageForm.resetForm();
  }
}
