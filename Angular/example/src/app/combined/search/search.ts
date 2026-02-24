import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {

  pokemonIdentifier = "";

  constructor(private pokemonService: PokemonService){}

  searchForPokemon(){
    this.pokemonService.searchForPokemon(this.pokemonIdentifier);
  }

}
