import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
import {SondageLieu} from '../sondage-lieu';
import {SondageDate} from '../sondage-date';

@Component({
  selector: 'app-sondage-display',
  templateUrl: './sondage-display.component.html',
  styleUrls: ['./sondage-display.component.css']
})
export class SondageDisplayComponent implements OnInit {

  sondagesLieux: SondageLieu[];
  sondagesDates: SondageDate[];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getSondagesDates().subscribe(res => {
      this.sondagesDates = res.map (item => new SondageDate(item.lien, item.utilisateur, item.participants, item.dates));
    });

    this.apiService.getSondagesLieux().subscribe(res =>{
      this.sondagesLieux = res.map(item => new SondageLieu(item.lien, item.utilisateur, item.participants, item.lieux));
    });
  }

}
