import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from '../shared/character';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'https://localhost:44344/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //Ajouter personnage
  createPersonnage(character):Observable<Character>{
    return this.http.post<Character>(this.apiUrl+'/newGame',JSON.stringify(character),this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  //Fuir
  FuirPersonnage(character):Observable<Character>{
    return this.http.post<Character>(this.apiUrl+'/game/12?commande=fuir',JSON.stringify(character),this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  //Combattre
  CombattreMonstre(character):Observable<Character>{
    return this.http.post<Character>(this.apiUrl+'/game/12?commande=combattre',JSON.stringify(character),this.httpOptions)
    .pipe(
      retry(1)
    )
  }

  //Ramasser
  RamasserObjet(character):Observable<Character>{
    return this.http.put<Character>(this.apiUrl+'/game/12?commande=ramasser',JSON.stringify(character),this.httpOptions)
    .pipe(
      retry(1)
    )
  }

}
