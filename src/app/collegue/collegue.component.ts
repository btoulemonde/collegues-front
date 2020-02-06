import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  modifier = true;
  creer = true;

  collegueACreer: Collegue = new Collegue();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subjectDetailCollegue.subscribe( collegueDetail => this.col = collegueDetail);
  }

  emailChange(valeurSaisie: string) {
    this.col.email = valeurSaisie;
  }
  photoUrlChange(valeurSaisie: string) {
    this.col.photoUrl = valeurSaisie;
  }
  ajouterCollegue() {
    this.creer = false;
    console.log('Création d\'un nouveau collègue');
  }
  creerCollegue() {
    this.dataService.creerCollegue(this.collegueACreer).subscribe(() => {} , error => console.log(error));
    this.creer = true;
  }
  modifierCollegue(col: Collegue) {
    this.modifier = false;
    console.log(`modification du collègue ${col.nom}`);
  }
  retour() {
    this.modifier = true;
  }
}
