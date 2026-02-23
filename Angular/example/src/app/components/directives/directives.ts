import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  conditionalDisplay = false;

  toggleConditionalDisplay(){
    this.conditionalDisplay = !this.conditionalDisplay;
  }
}
