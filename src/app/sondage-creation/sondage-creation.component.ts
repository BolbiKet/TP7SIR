import { Component, OnInit } from '@angular/core';
import {SondageLieu} from "../sondage-lieu";
import {APIService} from "../api.service";

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

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createSondage() {
    const lieux: string[] = [this.lieuR1, this.lieuR2, this.lieuR3];
    const sondageL: SondageLieu = new SondageLieu(this.lienS, this.mailC, null, lieux);
    this.apiService.createSondageLieu(sondageL);
  }

}
