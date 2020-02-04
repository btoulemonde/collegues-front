import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  modifier = true;

  constructor() { }

  ngOnInit() {
  }
  ajouterCollegue() {
    console.log('Création d\'un nouveau collègue');
  }
  modifierCollegue(col: Collegue) {
    this.modifier = false;
    console.log(`modification du collègue ${col.nom}`);
  }
}
