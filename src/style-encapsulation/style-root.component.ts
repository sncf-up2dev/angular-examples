import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p class="shared">
      Global : Noir
    </p>

    <app-emulated />
    <app-shadow />
    <app-none />
  `,
  styles: [`
    :host {
      display: block;
      border: solid
    }
  `],
})
export class StyleRootComponent {

  clicked = false

}
