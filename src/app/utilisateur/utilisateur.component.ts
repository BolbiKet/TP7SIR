import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';
import {UtilisateurDetails} from '../classes/utilisateur';
import {Allergie} from '../classes/allergie';
import {PrefAlim} from '../classes/pref-alim';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users: UtilisateurDetails[] = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getUtilisateurs().subscribe( res => {
      res.forEach((data) => {
        const allergies: Allergie [] = [];
        const preferences: PrefAlim [] = [];
        if (data.allergies != null) {
          data.allergies.forEach((a) => {
            allergies.push(new Allergie(a.allergie));
          });
        }
        if (data.preferences != null) {
          data.preferences.forEach((p) => {
            preferences.push(new PrefAlim(p.prefAlim));
          });
        }
        this.users.push(new UtilisateurDetails(data.nom, data.prenom, data.mail, data.lienSondageCrees, allergies, preferences));
      });
    });
  }
}
