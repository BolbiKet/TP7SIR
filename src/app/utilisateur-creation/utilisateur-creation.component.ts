import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../classes/utilisateur';
import {APIService} from '../api.service';
import {Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {NgDecorator} from "@angular/core/schematics/utils/ng_decorators";

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
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
  }

  saveUser(utilisateurForm: NgForm) {
    this.utilisateur = new Utilisateur(this.nomU, this.prenomU, this.mailU, null);
    this.apiService.createUser(this.utilisateur).subscribe(data => {
      console.log('Utilisateur crée :' + data.mail);
      this.resetForm(utilisateurForm);
    });
  }
  resetForm(utilisateurForm: NgForm) {
    utilisateurForm.resetForm();
  }
}

