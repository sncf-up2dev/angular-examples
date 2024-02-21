import { Component, inject } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';
import { ObservableService } from './observable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
      Pipe async
      <div class="border">
        Abonnement à un observable cold :
        {{ service.coldObservable$ | async }}
        {{ service.coldObservable$ | async }}
      </div>
      
      <div class="border">
        Abonnement à un observable hot :
        {{ service.hotObservable$ | async }}
        {{ service.hotObservable$ | async }}
      </div>
    </div>

    <div>
      Abonnement dans le service (voir console) <button (click)="service.resubscribe()">Réabonnement</button>
    </div>
  `,
  styles: ``
})
export class ObservableComponent {

  service = inject(ObservableService)

}
