import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export type Client = {
  id: number,
  firstName: string,
  lastName: string,
  age: number
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <h1>Liste des clients</h1>

    <app-table [data]="clients" />
  `,
  styles: [
  ]
})
export class ClientsComponent {

  clients: Client[] = [
    { id: 1, firstName: 'Lucian', lastName: 'Fry', age: 18 },
    { id: 2, firstName: 'Melodie', lastName: 'Ballard', age: 25 },
    { id: 3, firstName: 'Aurora', lastName: 'Deleon', age: 12 },
    { id: 4, firstName: 'Lisandra', lastName: 'Garrett', age: 60 },
    { id: 5, firstName: 'Xena', lastName: 'Noble', age: 34 },
  ]

}
