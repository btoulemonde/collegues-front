import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  col: Collegue;
  modifier = true;
  creer = true;
  messageErreur: string;
  messageOk: string;

  collegueACreer: Collegue = new Collegue();
  collegueAModifier: Collegue = new Collegue();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.collegueACreer.photoUrl = 'https://www.w3schools.com/bootstrap/img_avatar1.png';
    this.dataService.subjectDetailCollegue.subscribe(collegueDetail => this.col = collegueDetail);
  }

  ajouterCollegue() {
    this.creer = false;

  }
  creerCollegue() {
    this.messageErreur = null;
    this.messageOk = null;
    this.dataService.creerCollegue(this.collegueACreer).subscribe(() => {
      this.messageOk = 'Collègue créé';

    },
      error => this.messageErreur = 'Le collègue n\'a pas pu être créé');
    this.creer = true;
    this.modifier = true;
  }
  modifierCollegue(matricule: string) {
    this.messageErreur = null;
    this.messageOk = null;
    this.dataService.modifierCollegue(this.collegueAModifier, matricule).subscribe(() => {
      this.messageOk = 'Collègue créé';

    },
      error => this.messageErreur = 'Le collègue n\'a pas pu être créé');
    this.creer = true;
    this.modifier = true;
  }
  modiForm() {
    this.modifier = false;
  }
  annuler() {
    this.modifier = true;
    this.creer = true;
  }

}
