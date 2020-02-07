import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreationCollegueComponent } from './creation-collegue/creation-collegue.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { GalerieComponent } from './galerie/galerie.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { AccueilComponent } from './accueil/accueil.component';

const ROUTES: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'gallerie', component: GalerieComponent},
  {path: 'detailCollegue/:matricule', component: DetailCollegueComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreationCollegueComponent,
    EmailValidatorDirective,
    UrlValidatorDirective,
    MenuComponent, GalerieComponent, DetailCollegueComponent, AccueilComponent

  ],
  imports: [
    BrowserModule, NgbModule,
    HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
