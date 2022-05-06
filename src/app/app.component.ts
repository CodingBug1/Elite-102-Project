import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeDEX';
  pokemon: any = {}
  constructor(
    private pokemonService: PokemonService
    ) {}  
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((pokemon) => { 
      this.pokemon = pokemon
    } );
  }
}
// @Component({
//   selector: 'pokemon-card',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class PokemonCard implements OnInit {
//   pokemon: string = "ditto"
//   constructor(
//     private pokemonService: PokemonService
//     ) {}  
//   ngOnInit(): void {
//     this.pokemonService.getPokemon().subscribe((pokemon) => { 
//       this.pokemon = pokemon
//     } );
//   }
// }