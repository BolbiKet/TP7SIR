import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SondageCreationComponent} from './sondage-creation/sondage-creation.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {UtilisateurCreationComponent} from './utilisateur-creation/utilisateur-creation.component';
import {SondageDisplayComponent} from './sondage-display/sondage-display.component';

const routes: Routes = [
  {path: 'utilisateurs', component: UtilisateurComponent},
  {path: 'utilisateur', component: UtilisateurCreationComponent},
  {path: 'sondages', component: SondageDisplayComponent},
  {path: 'sondage', component: SondageCreationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
