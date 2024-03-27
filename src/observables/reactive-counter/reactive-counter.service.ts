import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveCounterService {

  private _counter = new BehaviorSubject<number>(0)

  counter$ = this._counter.asObservable()

  increment() {
    let newValue = this._counter.getValue()
    newValue++
    this._counter.next(newValue)
  }

}
