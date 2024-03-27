import { Component, inject } from '@angular/core';
import { ObservableService } from '../observable.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
      Hot observable <button (click)="observables.push(null)">Add</button> <button (click)="observables.pop()">Remove</button>
      <div *ngFor="let obs of observables" class="border">
        {{ service.hotObservable$ | async }}
      </div>
    </div>
    <div class="border">
      Subject <button (click)="subjects.push(null)">Add</button> <button (click)="subjects.pop()">Remove</button>
      <div *ngFor="let sub of subjects" class="border">
        {{ subject$ | async }}
      </div>
    </div>
    <div class="border">
      BehaviorSubject <button (click)="behaviorSubject.push(null)">Add</button> <button (click)="behaviorSubject.pop()">Remove</button>
      <div *ngFor="let behaviorSub of behaviorSubject" class="border">
        {{ behaviorSubject$ | async }}
      </div>
    </div>
  `,
  styles: ``
})
export class SubjectComponent {

  subjects = [null, null]
  behaviorSubject: null[] = []
  observables: null[] = []

  service = inject(ObservableService)

  subject$ = new Subject()
  behaviorSubject$ = new BehaviorSubject(0)

  constructor() {
    this.service.subscription.unsubscribe()
    this.service.coldObservable$.subscribe(this.subject$)
    this.service.coldObservable$.subscribe(this.behaviorSubject$)
  }

}
