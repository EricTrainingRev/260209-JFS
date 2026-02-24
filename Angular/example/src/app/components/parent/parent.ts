import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  parentData = "This data comes from the parent component";

  childDataStore = "";

  handleChildEvent(childData: string){
    this.childDataStore = childData;
  }

}
