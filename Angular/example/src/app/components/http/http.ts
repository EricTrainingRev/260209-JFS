import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http',
  imports: [FormsModule],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {

  userInput = "";

  constructor(private httpClient: HttpClient){}

  searchForPokemon(){
    const responseObservable =  this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${this.userInput}`);
    responseObservable.subscribe(data => {
      console.log(data);
    });
  }

}
