import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [],
  template: `
    <div >
      Composant 'HostBindé'
    </div>
  `,
  styles: `
    :host {
      display: block;
      border: 5px solid black;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `,
  host: {
    '(click)': 'clicked($event)',
    '[style.font-size.px]': 'size'
  }
})
export class HostComponent {

  size = 10

  clicked(event: Event) {
    this.size += 10
    console.log("Click composant host ! " + this.size)

    event.stopPropagation()
  }

}
