import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';

@Component({
  selector: 'app-result-sondage',
  templateUrl: './result-sondage.component.html',
  styleUrls: ['./result-sondage.component.css']
})
export class ResultSondageComponent implements OnInit {

  resultsSL: string [] = [];
  resultsSD: string [] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getCountParticipationSL().subscribe(data => {
      this.resultsSL = data;
    });
    this.apiService.getCountParticipationSD().subscribe(data => {
      this.resultsSD = data;
    });
  }

}
