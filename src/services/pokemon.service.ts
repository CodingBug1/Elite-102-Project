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
    return this.http.get<any>(`${this.baseUrl}/pokemon/psyduck/`)
  }
  /*code below is an attempted function to add images from api*/
  getArtwork(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/psyduck/`)
  }
}
