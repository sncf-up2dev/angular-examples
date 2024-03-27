import { Component } from '@angular/core';
import { Observer, interval } from 'rxjs';

export class MyObserver<T> implements Observer<T> {

  next = (v: T) => console.log(v)

  error = console.log

  complete() {
    console.log("Complete !")
  }
}

@Component({
  selector: 'app-my-observer',
  standalone: true,
  imports: [],
  template: `
    <button (click)="myObs.next(1)">Next</button>
    <button (click)="myObs.complete()">Complete</button>
    <button (click)="myObs.error(null)">Error</button>
  `,
  styles: ``
})
export class MyObserverComponent {

  myObs = new MyObserver<number>();

  constructor() {
    interval(1000).subscribe(this.myObs)
  }

}
