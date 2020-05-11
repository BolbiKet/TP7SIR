import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SondageLieu} from '../classes/sondage-lieu';
import {SondageDate} from '../classes/sondage-date';
import {DateReunion} from '../classes/date-reunion';
import {LieuDetails, LieuReunion} from '../classes/lieu-reunion';
import {APIService} from '../api.service';
import {Utilisateur} from '../classes/utilisateur';
import {ParticipationSL} from '../classes/participation-sl';
import {ParticipationSD} from '../classes/participation-sd';

@Component({
  selector: 'app-sondage-participation',
  templateUrl: './sondage-participation.component.html',
  styleUrls: ['./sondage-participation.component.css']
})
export class SondageParticipationComponent implements OnInit {
  nameP = '';
  lastNameP = '';
  mailP = '';
  typeS = '';
  listSL: SondageLieu [] = [];
  listSD: SondageDate [] = [];
  dates: DateReunion [] = [];
  places: LieuReunion [] = [];
  linkSL: string;
  linkSD: string;
  chosenSL: SondageLieu;
  chosenSD: SondageDate;
  chosenPlace: string;
  chosenDate: string;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getSondagesLieux().subscribe(res => {
      const places: LieuReunion[] = [];
      res.forEach((s) => {
        s.lieux.forEach((l) => {
         const place = new LieuReunion(l.nomLieu);
         places.push(place);
        });
        this.listSL.push(new SondageLieu(s.lien, s.utilisateur, places));
      });
    });
    this.apiService.getSondagesDates().subscribe(res => {
      const dates: DateReunion[] = [];
      res.forEach((s) => {
        s.dates.forEach((d) => {
          const date = new DateReunion(d.date, d.contientPauseDej);
          dates.push(date);
        });
        this.listSD.push(new SondageDate(s.lien, s.utilisateur, dates));
      });
    });
  }

  participateSondage(participationForm: NgForm) {
    this.apiService.getUtilisateur(this.mailP).subscribe(data => {
      const user = new Utilisateur(data.nom, data.prenom, data.mail);
      if (this.typeS === 'lieu') {
        this.participateSL(user, participationForm);
      } else {
        this.participateSD(user, participationForm);
      }
    });
  }

  private participateSL(user: Utilisateur, partForm: NgForm) {
    this.apiService.getLieu(this.chosenSL.getLien(), this.chosenPlace).subscribe(res => {
      const place = new LieuReunion(res.nomLieu);
      const participation: ParticipationSL = new ParticipationSL(this.nameP, this.lastNameP, user, place, this.chosenSL);
      this.apiService.createParticipationSL(participation).subscribe(data  => {
        alert('Participation enregistrée');
        this.resetForm(partForm);
      });
    });
  }

  private participateSD(user: Utilisateur, partForm: NgForm) {
    this.apiService.getDate(this.chosenSD.getLien(), this.chosenDate).subscribe(res => {
      const date = new DateReunion(res.date, res.contientPauseDej);
      const participation: ParticipationSD = new ParticipationSD (this.nameP, this.lastNameP, user, date, this.chosenSD);
      this.apiService.createParticipationSD(participation).subscribe(data => {
        alert('Participation enregistrée');
        this.resetForm(partForm);
      });
    });
  }

  searchPlaces() {
    this.places.splice(0, this.places.length);
    this.apiService.getSondageLieuByLien(this.linkSL).subscribe(data => {
      data.lieux.forEach((l) => {
        this.places.push(new LieuReunion(l.nomLieu));
      });
      this.apiService.getUtilisateur(data.utilisateur).subscribe(u => {
        const user = new Utilisateur(u.nom, u.prenom, u.mail);
        this.chosenSL = new SondageLieu(data.lien, user, this.places);
      });
    });
  }

  searchDates() {
    this.dates.splice(0, this.places.length);
    this.apiService.getSondageDatesByLien(this.linkSD).subscribe(data => {
      data.dates.forEach((d) => {
        this.dates.push(new DateReunion(d.date, d.contientPauseDej));
      });
      this.apiService.getUtilisateur(data.utilisateur).subscribe(u => {
        const user = new Utilisateur(u.nom, u.prenom, u.mail);
        this.chosenSD = new SondageDate(data.lien, user, this.dates);
      });
    });
  }

  resetForm(participationForm: NgForm) {
    participationForm.resetForm();
  }
}
