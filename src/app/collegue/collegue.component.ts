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
  collegueAModifier: Collegue = new Collegue();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subjectDetailCollegue.subscribe( collegueDetail => this.col = collegueDetail);
  }

  ajouterCollegue() {
    this.creer = false;

  }
  creerCollegue() {
    this.dataService.creerCollegue(this.collegueACreer).subscribe(() => {} , error => console.log(error));
    this.creer = true;
    this.modifier = true;
  }
  modifierCollegue(matricule: string) {
    this.dataService.modifierCollegue(this.collegueAModifier, matricule).subscribe(() => {} , error => console.log(error));
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
