import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../utilisateur";
import {APIService} from "../api.service";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

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
  sucess = new Subject<string>();
  alertClosed = true;
  sucessMessage = 'Utilisateur crée';

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
  }

  saveUser() {
    this.utilisateur = new Utilisateur(this.nomU, this.prenomU, this.mailU, null, null);
    this.apiService.createUser(this.utilisateur).subscribe(data => {
      console.log('Utilisateur crée :' + data.mail);
    });
  }
}

