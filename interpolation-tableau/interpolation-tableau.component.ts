import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-example',
  templateUrl: './interpolation-tableau.component.html',
  styleUrls: ['./interpolation-tableau.component.css']
})
export class InterpolationTableauComponent {

  numbers: number[] = [ 0, 1 ]

  push() {
    this.numbers.push(this.numbers.length)
    console.log(this.numbers)
  }

  pop() {
    this.numbers.pop()
    console.log(this.numbers)
  }

  addToLastElement() {
    this.numbers[this.numbers.length-1]++
    console.log(this.numbers)
  }
  
  update() {
    this.numbers = [...this.numbers]
    console.log(this.numbers)
  }

}
