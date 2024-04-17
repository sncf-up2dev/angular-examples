import { Component, inject } from '@angular/core';
import { ClientsService } from '../../http-client/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{ obs$ | async }}
  `,
  styles: ``
})
export class InterceptorStandaloneComponent {

  clientService = inject(ClientsService)

  obs$ = this.clientService.getPaginedClients(1)

}
