import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { names } from '../persons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `

  <div (mousemove)="0" class="border">
    {{ time | async }}
  </div>

  <div class="border" (click)="0">
      /!\ Interpolations a ne pas faire /!\<br />
      <!-- <div>Effet de bord : {{ getLast() }}</div> -->

      <!--<div>Random : {{ getRandomName() }}</div> -->
      <div>Opréation complexe : {{ lowestNumber() }} </div>
    
  </div>
  `,
  styles: ['']
})
export class InterpolationComponent {

  names: string[] = names

  getLast() {
    return names.pop()
  }

  getRandomName(): string {
    return names[Math.floor(Math.random() * this.names.length)];
  }

  numbers: number[] = [...Array(10000)].map(() => Math.random()).sort()

  lowestNumber(): number {
    console.log("sort")
    return this.numbers[0];
  }



  time = interval(10)

}

