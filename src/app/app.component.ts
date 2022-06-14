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
  pokemon: any = {}
  constructor(
    private pokemonService: PokemonService
  ) { }
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((pokemon) => {
      this.pokemon = pokemon
    });
  //   /*code below is attempted function using service to show images from api */
  //   this.pokemonService.getArtwork().subscribe((artwork): void => {
  //     this.artwork = artwork
  //   } );
  // }
  }
}