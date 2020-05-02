import { Component, OnInit } from '@angular/core';
import {SondageLieu} from '../classes/sondage-lieu';
import {APIService} from '../api.service';
import {Utilisateur} from '../classes/utilisateur';
import {SondageDate} from '../classes/sondage-date';
import {LieuReunion} from '../classes/lieu-reunion';
import {DateReunion} from '../classes/date-reunion';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sondage-creation',
  templateUrl: './sondage-creation.component.html',
  styleUrls: ['./sondage-creation.component.css']
})
export class SondageCreationComponent implements OnInit {

  lienS = '';
  mailC = '';
  lieuR1 = '';
  lieuR2 = '';
  lieuR3 = '';
  typeS = '';
  date1 = '';
  date2 = '';
  date3 = '';
  pauseDej1 = false;
  pauseDej2 = false;
  pauseDej3 = false;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
  patternDate = '^[0-9]{2}-[0-9]{2}-[0-9]{4}$';

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createSondage(sondageForm: NgForm) {
    this.apiService.getUtilisateur(this.mailC).subscribe(data => {
      const utilisateur: Utilisateur = new Utilisateur(data.nom, data.prenom, data.mail, null);
      if (this.typeS === 'lieu') {
        this.createSondageLieu(utilisateur, sondageForm);
      } else {
        this.createSondageDate(utilisateur, sondageForm);
      }
    });
  }

  private createSondageLieu(utilisateur, sondageForm: NgForm) {
    const lieu1: LieuReunion = new LieuReunion(this.lieuR1, null);
    const lieu2: LieuReunion = new LieuReunion(this.lieuR2,null);
    const lieu3: LieuReunion = new LieuReunion(this.lieuR3, null);
    const lieux: LieuReunion[] = [lieu1, lieu2, lieu3];

    const sondageL: SondageLieu = new SondageLieu(this.lienS, utilisateur, lieux);
    this.apiService.createSondageLieu(sondageL).subscribe(data => {
      console.log ('Sondage de type lieu crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }

  private createSondageDate(utilisateur, sondageForm: NgForm) {
    const dateR1: DateReunion = new DateReunion(this.date1, this.pauseDej1, null);
    const dateR2: DateReunion = new DateReunion(this.date2, this.pauseDej2, null);
    const dateR3: DateReunion = new DateReunion(this.date3, this.pauseDej3, null);
    const dates: DateReunion[] = [dateR1, dateR2, dateR3];
    const sondageD: SondageDate = new SondageDate(this.lienS, utilisateur, dates);
    this.apiService.createSondageDate(sondageD).subscribe(data => {
      console.log('Sondage de type date crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }

  resetForm(sondageForm: NgForm) {
    sondageForm.resetForm();
  }

}
