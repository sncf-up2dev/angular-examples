import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Person, getRandomPerson } from '../persons';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-line',
  template: `
    {{ person.name }} {{ person.age }} <input />
  `,
  host: {
    'class': 'border'
  },
  styles: `
    :host {
      display: block;
      padding: 10px;
    }
  `
})
export class LineComponent implements OnInit, OnDestroy {

  /*  Composant gérant l'affichage d'une personne. 
   * Les hooks onInit et onDestroy sont implémentés pour
   * logger la création et destruction des éléments 
  */

  @Input({ required: true })
  person!: Person

  ngOnInit(): void {
    console.log(`employe ${this.person.name} : ngOnInit`);
  }
  ngOnDestroy(): void {
    console.log(`employe ${this.person.name} : ngOnDestroy`);
  }

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, LineComponent],
  template: `

    <div class="border" *ngIf="trackBy">
      Avec trackBy
      <app-line draggable="true" *ngFor="let client of clients; trackBy: trackByName" [person]="client" /> 
    </div>

    <div class="border" *ngIf="!trackBy">
      Sans trackBy
      <app-line *ngFor="let client of clients" [person]="client" />
    </div>

    <button (click)="trackBy = !trackBy">Switch</button>

    <div>
      Mutations :
      <button (click)="pushMut()">Ajouter un client</button>
      <button (click)="popMut()">Supprimer un client </button>
      <button (click)="addAllMut()">Modifier tous les clients</button>
    </div>

    <div>
      New reference :
      <button (click)="pushNew()">Ajouter un client</button>
      <button (click)="popNew()">Supprimer un client </button>
      <button (click)="addAllNew()">Modifier tous les clients</button>
    </div>
  `,
})
export class TrackByComponent {

  trackBy = false

  clients: Person[] = [
    { name: "Lucian Fry", age: 18 },
    { name: "Melodie Ballard", age: 25 },
    { name: "Aurora Trevino", age: 51 },
    { name: "Rahim Stein", age: 37 },
    { name: "Dominic Deleon", age: 61 },
  ]

  trackByName(index: number, user: Person) {
    return Math.floor(Math.random() * 5)
  }

  addMut(client: Person) {
    client.age++
  }

  addNew(client: Person) {
    client = { ...client }
  }

  /* Push - Pop
      Changer la référence du tableau ne provoque
    pas la destruction et recréation des éléments
    dans le ngFor
  */

  popMut() {
    this.clients.pop()
  }

  pushMut() {
    this.clients.push(getRandomPerson())
  }

  popNew() {
    this.clients = [...this.clients]
    this.clients.pop()
  }

  pushNew() {
    this.clients = [...this.clients]
    this.clients.push(getRandomPerson())
  }

  /* 
    Modifications des éléments du tableau
  */

  addAllMut() {
    this.clients.forEach(client => client.age++)
  }

  addAllNew() {
    this.clients = this.clients.map(
      client => { return { ...client, age: client.age + 1 } }
    )
  }

}
