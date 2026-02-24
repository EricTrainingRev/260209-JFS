import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  /*
    In order to expose these fields for property binding the @Input decorator is needed. This will
    expose the fields and allow for property binding to be done in the parent html template
  */
  @Input()
  parentDataStore!: string;

  @Input()
  secondInput!: number;

  // set by the user input in the input element of the component's html template
  inputValue = "";

  /*
    The @Output decorator tells Angular this field represents an event that can be bound in a parent component, just like click and other
    vanilla events. You can provide a generic to indicate what type of data will be included alongside the event. Use this if you need
    to pass data to the parent component
  */
  @Output()
  childEvent = new EventEmitter<string>();

  triggerChildEvent(){
    // use the emit method when you want to trigger an event emission
    this.childEvent.emit(this.inputValue);
  }

}
