import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject } from '@angular/core';
import { ReactiveCounterService } from './reactive-counter.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, forwardRef(() => ChildComponent)],
  template: ` 
    <div class="border">
      Root Component 
      Value of counter : {{ service.counter$ | async }}
      <button (click)="service.increment()">Add</button>
      <app-child />
    </div>
  `,
  styles: ``
})
export class ReactiveCounterComponent {

  service = inject(ReactiveCounterService)

}


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
      Child Component
      <div>
        Valeur du compteur : {{ service.counter$ | async }}
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  service = inject(ReactiveCounterService)

}