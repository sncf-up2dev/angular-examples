import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export type Product = {
  id: number,
  name: string,
  price: number
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <h1>Liste des produits</h1>

    <app-table [data]="products" />
  `,
  styles: [`
    ::ng-deep td {
      color: red;
    }
  `]
})
export class ProductsComponent {

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 5 },
    { id: 2, name: 'Product 2', price: 10 },
    { id: 3, name: 'Product 3', price: 20 },
    { id: 4, name: 'Product 4', price: 8 }
  ]

}
