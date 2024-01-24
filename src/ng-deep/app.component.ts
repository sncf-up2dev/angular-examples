import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <li><a routerLink="/clients" routerLinkActive="active" ariaCurrentWhenActive="page">Clients</a></li>
    <li><a routerLink="/produits" routerLinkActive="active" ariaCurrentWhenActive="page">Produits</a></li>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'piercing';
}
