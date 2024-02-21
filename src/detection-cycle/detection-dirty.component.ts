import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { getRandomPerson } from '../persons';
import { DefaultComponent } from './detection-default.component';

@Component({
  selector: 'app-push-leaf',
  standalone: true,
  imports: [],
  template: `
    OnPush Leaf - {{ printNumber() }}
  `,
  styles: ``,
  host: {
    'class': 'component-border',
    '(click)': "addNumber()"
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushLeafComponent {

  number = 0

  addNumber() {
    this.number++
    console.log(`Dirty OnPush : Template method (${this.number})`)
  }

  printNumber(): number {
    console.log("printNumber() " + this.number)
    return this.number
  }

}

@Component({
  selector: 'app-push-branch',
  standalone: true,
  imports: [PushLeafComponent, DefaultComponent],
  template: `
    <app-push-leaf />
    <app-push-leaf />
    <app-default [person]="person" />
  `,
  styles: ``,
  host: {
    'class': 'component-border'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushBranchComponent {

  number = 0

  person = getRandomPerson()

}