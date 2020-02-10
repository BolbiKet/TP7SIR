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
      this.utilisateurs = res.map(item => new Utilisateur(item.nom, item.prenom, item.mail, item.lienSondageCrees, item.lienSondageParticipes));
    });
  }

}
