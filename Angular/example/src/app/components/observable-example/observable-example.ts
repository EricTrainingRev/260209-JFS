import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  imports: [],
  templateUrl: './observable-example.html',
  styleUrl: './observable-example.css',
})
export class ObservableExample {

  output1 = '';
  output2 = '';
  /*
      When you create a custom observable the simplest way to set it up is to provide a callback 
      function specifying what code to execute when the observable is subscribed to. The subscribe
      method of the observable is how you trigger the execution of the observable's callback. In order
      to get any data out of the observable you have to use the "next" method of the "observer" you
      provide in the callback function. In this example the observer is actually another callback 
      function provided in the subscribeFirst and subscribeSecond methods. When working with observables
      there are two other methods to keep in mind: the first is "error". Call this via your
      observer when something goes wrong and you want to perform further actions based on the
      error. The other option is "complete": call this when data emission is done for the subscription

      A common naming convention is to include a "$" at the end of any variable name that references
      an observable
  */
  monocast$ = new Observable<number>(observer => {
    const random = Math.floor(Math.random() * 1000);
    observer.next(random);
    console.log("this is happening after sending the random number to the observer")
    observer.complete();
  });

  subscribeFirst() {
    this.monocast$.subscribe(num => {
      this.output1 = `First subscription received: ${num}`;
    });
  }

  subscribeSecond() {
    this.monocast$.subscribe(num => {
      this.output2 = `Second subscription received: ${num}`;
    });
  }

}
