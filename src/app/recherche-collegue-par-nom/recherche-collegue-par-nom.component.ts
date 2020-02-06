import { Component, OnInit, Input, NgModule } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import { Observable } from 'rxjs';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})

export class RechercheCollegueParNomComponent implements OnInit {
  listeMatricules: Observable<string[]>;
  afficherMatricules = false;
  collegue: Observable<Collegue[]>;

  constructor(private dataService: DataService) { }


  ngOnInit() {
  }
  affichageMatricules() {

  }
  rechercherCollegueParNom(nom: string) {
    this.listeMatricules = this.dataService.listerMatriculeParNom(nom);
    this.afficherMatricules = true;
  }
  recupererCollegue(matricule: string) {
    this.dataService.recupererCollegueCourant(matricule).subscribe(
      () => {},
      error => console.log(error)
    );
  }

}
