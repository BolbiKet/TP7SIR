import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Allergie} from '../classes/allergie';
import {PrefAlim} from '../classes/pref-alim';
import {APIService} from '../api.service';

@Component({
  selector: 'app-add-allergies',
  templateUrl: './add-allergies.component.html',
  styleUrls: ['./add-allergies.component.css']
})
export class AddAllergiesComponent implements OnInit {

  mailU = '';
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  allergie1 = '';
  allergie2 = '';
  allergie3 = '';
  prefA1 = '';
  prefA2 = '';
  prefA3 = '';

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  saveAllergies(form: NgForm) {
    const allergies: Allergie[] = [];
    const a1 = new Allergie(this.allergie1);
    allergies.push(a1);
    if (this.allergie2 !== '') {
      const a2 = new Allergie(this.allergie2);
      allergies.push(a2);
    }
    if (this.allergie3 !== '') {
      const a3 = new Allergie(this.allergie3);
      allergies.push(a3);
    }
    this.apiService.postAllergies(allergies, this.mailU).subscribe(data => {
      alert ('Allergies ajoutées');
      form.resetForm();
    });

  }
  savePref(form: NgForm) {
    const pref1 = new PrefAlim(this.prefA1);
    const pref2 = new PrefAlim(this.prefA2);
    const pref3 = new PrefAlim(this.prefA3);
    const prefs: PrefAlim[] = [];
    prefs.push(pref1);
    prefs.push(pref2);
    prefs.push(pref3);
    this.apiService.postPrefAlim(prefs, this.mailU).subscribe(res => {
      alert('Préférences alimentaires ajoutées');
      form.resetForm();
    });
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }


}
