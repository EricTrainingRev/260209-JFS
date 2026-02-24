import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  imports: [],
  templateUrl: './subject-example.html',
  styleUrl: './subject-example.css',
})
export class SubjectExample {
  output1 = '';
  output2 = '';
  subject$ = new Subject<number>();

  subscribeFirst() {
    this.subject$.subscribe({
      next: num => this.output1 = `First subscription received: ${num}`,
      complete: () => this.output1 += ' (completed)'
    });
  }

  subscribeSecond() {
    this.subject$.subscribe({
      next: num => this.output2 = `Second subscription received: ${num}`,
      complete: () => this.output2 += ' (completed)'
    });
  }

  emitRandom() {
    const random = Math.floor(Math.random() * 1000);
    this.subject$.next(random);
  }

  completeSubject() {
    this.subject$.complete();
  }
}
