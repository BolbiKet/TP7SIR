import { Component, OnInit } from '@angular/core';
import {Sondage} from '../sondage';
import {APIService} from '../api.service';

@Component({
  selector: 'app-sondage-display',
  templateUrl: './sondage-display.component.html',
  styleUrls: ['./sondage-display.component.css']
})
export class SondageDisplayComponent implements OnInit {

  sondages: Sondage[];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getSondages().subscribe(res =>{
      this.sondages = res.map(item => new Sondage(item.lien, item.utilisateur, item.participants));
    });
  }

}
