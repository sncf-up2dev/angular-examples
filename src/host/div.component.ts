import { Component } from "@angular/core"

@Component({
    selector: 'app-div',
    standalone: true,
    imports: [],
    template: `
    <div class="border" [style.font-size.px]='size' (click)="clicked($event)">
      Composant avec un div
    </div>
  `,
    styles: `
    .border {
      border: 5px solid black;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `
})
export class DivComponent {

    size = 10

    clicked(event: Event) {
        this.size += 10
        console.log("Click composant div ! " + this.size)

        event.stopPropagation()
    }

}