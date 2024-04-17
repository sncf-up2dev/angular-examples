import { Component, inject } from '@angular/core';
import { ClientsService } from '../../http-client/client.service';

@Component({
  selector: 'app-root',
  template: `
    {{ obs$ | async }}
  `,
  styles: ``
})
export class InterceptorComponent {

  clientService = inject(ClientsService)

  obs$ = this.clientService.getPaginedClients(1)

}
