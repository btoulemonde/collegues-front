import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { PhotoMatricule } from '../models/PhotoMatricule';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  tabColls: Observable<PhotoMatricule[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tabColls = this.dataService.listerMatriculePhoto()
      .pipe(
        map(
          colls => colls.filter(c =>   c.photUrl && c.photUrl.startsWith('http'))
        )
      );
  }


  recupererCollegue(mat: string) {

  }



}
