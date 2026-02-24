import { Component, signal, WritableSignal } from '@angular/core';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-name',
  imports: [],
  templateUrl: './name.html',
  styleUrl: './name.css',
})
export class Name {

  pokemonName: WritableSignal<string> = signal("");

  constructor(private pokemonService: PokemonService){
    this.pokemonService.getPokemonObservable().subscribe(pokemonData => {
      this.pokemonName.set(pokemonData.name);
    });
  }

}
