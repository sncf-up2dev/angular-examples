import { Component, Directive, TemplateRef } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-root',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  condition = true;

  numbers: number[] = [0, 1, 2]

  push() {
    this.numbers.push(this.numbers.length)
    console.log(this.numbers)
  }

  pop() {
    this.numbers.pop()
    console.log(this.numbers)
  }

  addToLastElement() {
    this.numbers[this.numbers.length - 1]++
    console.log(this.numbers)
  }

}

