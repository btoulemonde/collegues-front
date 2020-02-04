import { Component, OnInit, Input } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  @Input() matricules = listeMatricules;
  afficherMatricules = false;

  constructor() { }


  ngOnInit() {
  }
  affichageMatricules() {
    this.afficherMatricules = true;
  }

}
