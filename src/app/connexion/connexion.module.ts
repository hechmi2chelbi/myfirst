import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [ConnexionComponent, LoginComponent, InscriptionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ConnexionModule { }
