import { Component, signal, WritableSignal } from '@angular/core';
import { PokemonService } from '../pokemon-service';

@Component({
  selector: 'app-moves',
  imports: [],
  templateUrl: './moves.html',
  styleUrl: './moves.css',
})
export class Moves {

  pokeMoves: WritableSignal<string[]> = signal([]);

  constructor(private pokeService: PokemonService){
    this.pokeService.getPokemonObservable().subscribe(pokeData => {
      this.pokeMoves.set(pokeData.moves);
    });
  }

}
