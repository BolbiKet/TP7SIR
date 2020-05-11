import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../classes/utilisateur';
import {APIService} from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-utilisateur-creation',
  templateUrl: './utilisateur-creation.component.html',
  styleUrls: ['./utilisateur-creation.component.css']
})
export class UtilisateurCreationComponent implements OnInit {

  nameU = '';
  firstNameU = '';
  mailU = '';
  user: Utilisateur;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
  }

  saveUser(userForm: NgForm) {
    this.user = new Utilisateur(this.nameU, this.firstNameU, this.mailU);
    this.apiService.createUser(this.user).subscribe(data => {
      alert ('Utilisateur crée : ' + data.mail);
      this.resetForm(userForm);
    });
  }
  resetForm(userForm: NgForm) {
    userForm.resetForm();
  }
}

