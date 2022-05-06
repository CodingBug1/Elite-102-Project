import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) { }
  private baseUrl: string = "/api"
  getPokemon(): Observable<any> {
    console.log("getting pokemon")
    return this.http.get<any>(`${this.baseUrl}/pokemon/psyduck`)
  }
}