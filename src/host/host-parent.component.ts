import { Component } from '@angular/core';
import { HostComponent } from './host.component';
import { DivComponent } from './div.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HostComponent, DivComponent],
  template: `
    <div class="border" (click)="onHostClick()">
      <app-host [style.font-size.px]='parentSize' (click)="onClick($event)" />
      <app-div [style.font-size.px]='parentSize' (click)="onClick($event)" />
    </div> 
  `,
  styles: ``
})
export class HostParentComponent {

  parentSize = 50

  onClick(event: Event) {
    event.stopPropagation()
    console.log("Click parent !")
  }

  onHostClick() {
    console.log("Click host parent !")
  }

}
