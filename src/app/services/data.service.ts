import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Collegue } from '../models/Collegue';
import {tap} from 'rxjs/operators';



const url = 'https://btoulemonde-collegues-api.herokuapp.com/collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subjectDetailCollegue = new Subject<Collegue>();

  constructor(private httpClient: HttpClient) { }

  listerMatriculeParNom(nom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(`${url}?nom=${nom}`);
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.httpClient.get<Collegue>(`${url}/${matricule}`)
    .pipe(
      tap(collegueDetail => { this.subjectDetailCollegue.next(collegueDetail);
    })
    );
  }
}
