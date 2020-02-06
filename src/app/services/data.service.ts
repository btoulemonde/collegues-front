import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collegue } from '../models/Collegue';


const url = 'https://btoulemonde-collegues-api.herokuapp.com/collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  listerMatriculeParNom(nom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(`${url}?nom=${nom}`);
  }

  recupererCollegueCourant(matricule: string) {
    return this.httpClient.get<Collegue[]>(`${url}/${matricule}`);
  }
}
