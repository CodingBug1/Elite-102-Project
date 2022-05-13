import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeDEX';
  artwork: any = {}
  pokemon: any[] = []
  constructor(
    private pokemonService: PokemonService
    ) {}  
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data) => { 
      for (const result of data.results) {
        this.pokemonService.getArtwork(result.url).subscribe((details): void => {
          this.pokemon.push({
            name: result.name,
            image: details.sprites.other['official-artwork'].front_default
          })
        } );        
      }
    } );
  }
}
