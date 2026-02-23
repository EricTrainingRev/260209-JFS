import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {

  // This option is fine for static content, not for dynamic content
  greeting = "Welcome to the Explore component!";

  count = 0;

  increaseCount(){
    this.count++;
  }


}
