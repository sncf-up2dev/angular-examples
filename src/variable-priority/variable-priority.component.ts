import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Topic = {
  title: string;
  value: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  template: `
    <div class="border">
      <div *ngFor="let topic of topics"> 
          {{ topic.value }}
      </div>
    </div>

    <div>
        <div>{{ topic.value }}</div>
    </div>
    
    <input #topic value="Input 2"/>
    <input #topic value="Input 3"/>


  `,
})
export class VariablePriorityComponent {

  readonly topics: Topic[] = [
    { title: 'New Component', value: 'ng generate component xyz' },
    { title: 'Angular Material', value: 'ng add @angular/material' },
    { title: 'Add PWA Support', value: 'ng add @angular/pwa' },
    { title: 'Add Dependency', value: 'ng add _____' },
    { title: 'Run and Watch Tests', value: 'ng test' },
    { title: 'Build for Production', value: 'ng build' },
  ]

  topic: Topic = { title: 'Topic seul', value: 'Ce topic est séparé des autres' }

}