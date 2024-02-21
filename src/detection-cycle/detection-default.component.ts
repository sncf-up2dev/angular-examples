import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../persons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  template: `
  Default -
  <ng-container *ngIf="person">
    {{ person.name }} {{ person.age }}
  </ng-container>
  `,
  styles: ``,
  host: {
    'class': 'component-border'
  },
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent {

  @Input()
  person?: Person

  printPerson(): string {
    console.log("printPerson() " + this?.person?.name)
    return `${this?.person?.name} ${this?.person?.age}`
  }

}
