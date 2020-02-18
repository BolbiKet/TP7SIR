import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {APIService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SondageDisplayComponent } from './sondage-display/sondage-display.component';
import { UtilisateurCreationComponent } from './utilisateur-creation/utilisateur-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    SondageDisplayComponent,
    UtilisateurCreationComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
