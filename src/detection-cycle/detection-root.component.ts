import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person, getRandomPerson } from '../persons';
import { DefaultComponent } from "./detection-default.component";
import { PushBranchComponent } from './detection-dirty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    OnPush Root
    <app-push-branch />
    <app-default [person]="person" />
    <button (click)="newPerson()">Mutate</button>
  `,
  styles: ``,
  host: {
    'class': 'component-border'
  },
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [DefaultComponent, PushBranchComponent]
})
export class DetectionRootComponent {

  person = getRandomPerson()

  newPerson() {
    this.person = { ...this.person, age: this.person.age + 1 }
  }

}
