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

  listerMatriculeParNom(nom: string): Observable<Collegue[]> {
    return this.httpClient.get<Collegue[]>(`${url}?nom=${nom}`);
  }

  recupererCollegueCourant(){
    return this.httpClient.get<Collegue[]>(`${url}/`);
  }
}
