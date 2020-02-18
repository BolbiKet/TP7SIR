import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../utilisateur";
import {APIService} from "../api.service";

@Component({
  selector: 'app-utilisateur-creation',
  templateUrl: './utilisateur-creation.component.html',
  styleUrls: ['./utilisateur-creation.component.css']
})
export class UtilisateurCreationComponent implements OnInit {

  nomU: string = '';
  prenomU: string = '';
  mailU: string = '';
  utilisateur: Utilisateur;

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }
  saveUser() {
    this.utilisateur = new Utilisateur(this.nomU, this.prenomU, this.mailU, null, null);
    this.apiService.createUser(this.utilisateur).subscribe(data => {
      alert('Utilisateur crée');
    });
  }

}
