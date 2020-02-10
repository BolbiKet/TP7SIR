import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
import {Utilisateur} from '../utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getUtilisateurs().subscribe( res => {
      for (let i = 0; 2; i++) {
        this.utilisateurs.push(new Utilisateur(res[i].nom, res[i].prenom, res[i].mail));
      }
    });
  }

}
