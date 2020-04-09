import { Component, OnInit } from '@angular/core';
import {SondageLieu} from '../sondage-lieu';
import {APIService} from '../api.service';
import {Utilisateur} from '../utilisateur';
import {SondageDate} from '../sondage-date';
import {LieuReunion} from '../lieu-reunion';
import {DateReunion} from '../date-reunion';
import {NgForm} from '@angular/forms';

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
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  patternDate = '^[0-9]{2}/[0-9]{2}/[0-9]{4}$';

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createSondage(sondageForm: NgForm) {
    this.apiService.getUtilisateur(this.mailC).subscribe(data => {
      const utilisateur: Utilisateur = new Utilisateur(data.nom, data.prenom, data.mail, null, null);
      if (this.typeS === 'lieu') {
        this.createSondageLieu(utilisateur, sondageForm);
      } else {
        this.createSondageDate(utilisateur, sondageForm);
      }
    });
  }

  private createSondageLieu(utilisateur, sondageForm: NgForm) {
    const lieu1: LieuReunion = new LieuReunion(this.lieuR1);
    const lieu2: LieuReunion = new LieuReunion(this.lieuR2);
    const lieu3: LieuReunion = new LieuReunion(this.lieuR3);
    const lieux: LieuReunion[] = [lieu1, lieu2, lieu3];

    const sondageL: SondageLieu = new SondageLieu(this.lienS, utilisateur, null, lieux);
    this.apiService.createSondageLieu(sondageL).subscribe(data => {
      console.log ('Sondage de type lieu crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }

  private createSondageDate(utilisateur, sondageForm: NgForm) {
    const dateR1: DateReunion = new DateReunion(this.date1);
    const dateR2: DateReunion = new DateReunion(this.date2);
    const dateR3: DateReunion = new DateReunion(this.date3);
    const dates: DateReunion[] = [dateR1, dateR2, dateR3];
    const sondageD: SondageDate = new SondageDate(this.lienS, utilisateur, null, dates);
    this.apiService.createSondageDate(sondageD).subscribe(data => {
      console.log('Sondage de type date crée : ' + data.lien);
      this.resetForm(sondageForm);
    });
  }
  resetForm(sondageForm: NgForm) {
    sondageForm.resetForm();
  }

}
