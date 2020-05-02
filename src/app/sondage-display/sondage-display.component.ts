import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
import {SondageLieu} from '../classes/sondage-lieu';
import {SondageDate} from '../classes/sondage-date';
import {LieuReunion} from '../classes/lieu-reunion';
import {DateReunion} from '../classes/date-reunion';

@Component({
  selector: 'app-sondage-display',
  templateUrl: './sondage-display.component.html',
  styleUrls: ['./sondage-display.component.css']
})
export class SondageDisplayComponent implements OnInit {

  sondagesLieux: SondageLieu[] = [];
  sondagesDates: SondageDate[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getSondagesDates().subscribe(res => {
     res.forEach((e) => {
        const dates: DateReunion[] = [];
        e.dates.forEach((d) => {
          dates.push(new DateReunion(d, null, null));
        });
        this.sondagesDates.push(new SondageDate(e.lien, e.utilisateur, dates));
      });
    });

    this.apiService.getSondagesLieux().subscribe(res => {
      res.forEach((e) => {
        const lieux: LieuReunion[] = [];
        e.lieux.forEach((l) => {
          lieux.push(new LieuReunion(l, null));
        });
        this.sondagesLieux.push(new SondageLieu(e.lien, e.utilisateur, lieux));
      });
    });
  }

}
