import { Component } from '@angular/core';
import { Search } from "../search/search";
import { PokemonService } from '../pokemon-service';
import { Name } from "../name/name";
import { Moves } from "../moves/moves";

@Component({
  selector: 'app-poke-parent',
  imports: [Search, Name, Moves],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class PokeParent {

  constructor(private pokemonService: PokemonService){}

  nameDataPresent(){
    return this.pokemonService.getStoredPokemonData().name !== "";
  }

  moveDataPresent(){
    return this.pokemonService.getStoredPokemonData().moves.length !== 0;
  }

}
