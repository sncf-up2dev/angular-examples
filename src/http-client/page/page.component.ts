import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, map, switchAll, switchMap } from 'rxjs';
import { ClientsService } from '../client.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../interceptors/module/interceptor.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
        Liste des clients : 
        <div *ngIf="pageClients$ | async as pageClients">
            <div *ngFor="let client of pageClients.data">{{client.firstname}} {{client.lastname}}</div>
            <button [disabled]="pageClients.curentPage === 1" (click)="updatePageState(-1)">Precedent</button>
            <button [disabled]="pageClients.curentPage === pageClients.lastPage" (click)="updatePageState(1)">Next</button>
            {{ pageClients.curentPage }} / {{ pageClients.lastPage }}
        </div>
    </div>
  `,
  styles: ``
})
export class PageComponent {

  clientService = inject(ClientsService)

  nextPageSubject = new BehaviorSubject(1)

  pageClients$ = this.nextPageSubject.pipe(
    switchMap(number => this.clientService.getPaginedClients(number)),
  )

  updatePageState(delta: number) {
    this.nextPageSubject.next(this.nextPageSubject.getValue() + delta)
  }

}
