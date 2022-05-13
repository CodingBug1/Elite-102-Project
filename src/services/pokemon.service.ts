import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) { }
  private baseUrl: string = "/api"
  getPokemon(): Observable<SimplePokemonResponse> {
    return this.http.get<SimplePokemonResponse>(`${this.baseUrl}/pokemon?limit=10&offset=0/`)
  }
  
  /*code below is an attempted function to add images from api*/
  getArtwork(url: string): Observable<any> {
    let endpoint = url.split("v2")[1]
    return this.http.get<any>(`${this.baseUrl}${endpoint}`)
  }
}
export class SimplePokemonResponse {
  results!: SimplePokemon[]
}
export class SimplePokemon {
  name!: string
  url!: string
}