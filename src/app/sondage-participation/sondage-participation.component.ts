import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SondageLieu} from '../classes/sondage-lieu';
import {SondageDate} from '../classes/sondage-date';
import {DateReunion} from '../classes/date-reunion';
import {LieuReunion} from '../classes/lieu-reunion';
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
  nomP = '';
  prenomP = '';
  mailP = '';
  typeS = '';
  listSL: SondageLieu [] = [];
  listSD: SondageDate [] = [];
  dates: string[] = [];
  lieux: string [] = [];
  lienSondageL: string;
  lienSondageD: string;
  sondageChoisiL: SondageLieu;
  sondageChoisiD: SondageDate;
  lieuChoisi: string;
  dateChoisie: string;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getSondagesLieux().subscribe(res => {
      this.listSL = res.map(item => new SondageLieu(item.lien, item.utilisateur, null));
    });
    this.apiService.getSondagesDates().subscribe(res => {
      this.listSD = res.map(item => new SondageDate(item.lien, item.utilisateur, null));
    });
  }

  participerSondage(participationForm: NgForm) {
    this.apiService.getUtilisateur(this.mailP).subscribe(data => {
      const utilisateur: Utilisateur = new Utilisateur(data.nom, data.prenom, data.mail, null);
      if (this.typeS === 'lieu') {
        this.participerSL(utilisateur, participationForm);
      } else {
        this.participerSD(utilisateur, participationForm);
      }
    });
  }

  private participerSL(utilisateur, partForm: NgForm) {
    const date = new LieuReunion(this.lieuChoisi, null);
    const participation: ParticipationSL = new ParticipationSL(this.nomP, this.prenomP, utilisateur, date, this.sondageChoisiL);
    this.apiService.createParticipationSL(participation).subscribe(res => {
      console.log ('Participation enregistrée');
      this.resetForm(partForm);
    });
  }

  private participerSD(utilisateur, partForm: NgForm) {
    const dateR: DateReunion = new DateReunion(this.dateChoisie, null, null);
    const participation: ParticipationSD = new ParticipationSD (this.nomP, this.prenomP, utilisateur, dateR, this.sondageChoisiD);
    this.apiService.createParticipationSD(participation).subscribe(data => {
      console.log ('Participation enregistrée');
      this.resetForm(partForm);
    });
  }

  chercherLieux() {
    this.apiService.getSondageLieuByLien(this.lienSondageL).subscribe(data => {
      this.sondageChoisiL = new SondageLieu(data.lien, null, null);
      this.lieux = data.lieux;
    });
  }

  chercherDates() {
    this.apiService.getSondageDatesByLien(this.lienSondageD).subscribe(data => {
      this.sondageChoisiD = new SondageDate(data.lien, null, null);
      this.dates = data.dates;
    });
  }

  resetForm(participationForm: NgForm) {
    participationForm.resetForm();
  }
}
