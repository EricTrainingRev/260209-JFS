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
  // Each time someone subscribes, a new Observable execution begins:
  monocast$ = new Observable<number>(observer => {
    const random = Math.floor(Math.random() * 1000);
    observer.next(random);
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
