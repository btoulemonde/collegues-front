import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
  col: Collegue;
  matricule: string;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(path => {
      this.matricule = path.get('matricule');
      this.dataService.recupererCollegueCourant(this.matricule).subscribe(c => this.col = c);
    });
  }

}
