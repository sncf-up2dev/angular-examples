import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div> Date avec un nombre : {{ dateNumber | date }}</div>
    <div> Date avec un objet Date : {{ dateObj | date }}</div>
    
    <button (click)="addTime()" >Ajouter</button>
  `,
  styles: ['']
})
export class PipeDateComponent {

  readonly DAY = 24 * 60 * 60 * 1000

  dateObj: Date = new Date()
  dateNumber: number = this.dateObj.getTime();

  addTime() {
    this.dateNumber += this.DAY
    this.dateObj.setTime(this.dateNumber)

    console.log(this.dateNumber)
    console.log(this.dateObj)
  }

}
