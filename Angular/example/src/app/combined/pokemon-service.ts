import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  
  private pokemon: BehaviorSubject<{name: string, moves: string[]}>;

  constructor(private httpClient: HttpClient){
    this.pokemon = new BehaviorSubject({
      name: "", 
      moves: [""]
    });
  }

  searchForPokemon(pokemonName: string){
    this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).subscribe(responseData => {
      const pokemonName = responseData.name;
      const pokemonMoves = responseData.moves;
      const newMoves: string[] = [];
      for (const moveObj of pokemonMoves){
        newMoves.push(moveObj.move.name);
      }
      this.pokemon.next({name: pokemonName, moves: newMoves});
      console.log(this.pokemon.getValue())
    });
  }

  getStoredPokemonData(){
    return this.pokemon.getValue();
  }

  getPokemonObservable(){
    return this.pokemon.asObservable();
  }

}
