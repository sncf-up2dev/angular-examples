import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StringKeyOf<BaseType> = `${Extract<keyof BaseType, string | number>}`;

@Component({
  standalone: true,
  imports: [CommonModule],


  selector: 'app-table',
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let key of keys"> {{ key }} </th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let row of data"> 
        <tr>
          <td *ngFor="let key of keys"> {{ row[key] }} </td>
        </tr>
        </ng-container>
      </tbody>
    </table>
  `,
  styles: [`
  table {
    width: 100%
  }

  table,
  td {
    border: 1px solid #333;
  }

  thead,
  tfoot {
    background-color: #333;
    color: #fff;
  }
`]
})
export class TableComponent<T extends object, K extends keyof T> implements OnInit {

  @Input( {required: true} )
  data!: T[]

  @Input()
  keys?: K[]

  ngOnInit(): void {
    if( this.keys === undefined && this.data.length > 0 ) {
      this.keys = Object.keys(this.data[0]) as K[]
    }
  }

}

