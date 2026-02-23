import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [UpperCasePipe],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  conditionalDisplay = false;

  loopContent = ["first", "second", "third"];

  switchTerm = "yes";

  switchText = "This renders if the case is a match for the statement being checked";

  toggleConditionalDisplay(){
    this.conditionalDisplay = !this.conditionalDisplay;
  }
}
