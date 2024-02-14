import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person, getRandomPerson } from '../persons';
import { FormsModule } from '@angular/forms';
import { Logger } from './logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, forwardRef(() => HooksComponent), FormsModule],
  template: `
    <app-hook [inputPerson]="child" [id]="i" *ngFor="let child of childs; trackBy: trackByName ; index as i"/>
    <div>
      <button (click)="push()">Push</button> 
      <button (click)="pop()">Pop</button>
    </div>
    <div>
      {{ cpt }} 
    </div>
    Dernier élément : {{ templateMethod() }} <button (click)="addAge()">Age++</button> <button (click)="addAgeNewRef()">Age++ Ref</button>
  `,
  host: {
    'class': 'component-border'
  },
  providers: [
    Logger
  ]
})
export class HooksMainComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  cpt = 0

  logger = inject(Logger)

  childs: Person[] = [...Array(1)].map(e => getRandomPerson())

  trackByName(index: number, user: Person) {
    return user.name
  }

  templateMethod(): string {
    this.logger.log("templateMethod()")
    return `${this.childs[this.childs.length - 1].name} ${this.childs[this.childs.length - 1].age}`
  }

  pop(): void {
    this.logger.log("pop()")
    this.childs.pop()
  }

  push(): void {
    this.logger.log("push()")
    this.childs.push(getRandomPerson())
  }

  addAge(): void {
    this.childs[this.childs.length - 1].age++
  }

  addAgeNewRef(): void {
    let child = this.childs[this.childs.length - 1]
    this.childs[this.childs.length - 1] = { ...child, age: child.age + 1 }
  }

  constructor() {
    this.logger.prefix = 'app-root'
    this.logger.log("constructor()")
  }

  ngOnInit(): void {
    this.logger.log("ngOnInit()")
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log("ngOnChanges")
  }

  ngDoCheck(): void {
    this.logger.log("ngDoCheck()")
  }

  ngAfterViewInit(): void {
    this.logger.log("ngAfterViewInit()")
  }

  ngAfterViewChecked(): void {
    this.logger.log("ngAfterViewChecked()")
  }

  ngOnDestroy(): void {
    this.logger.log("ngOnDestroy()")
  }

}

@Component({
  selector: 'app-hook',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    {{ inputPerson.name }} {{ inputPerson.age }} <button (click)="add()">Age++</button>
  `,
  host: {
    'class': 'component-border'
  },
  providers: [
    Logger
  ],
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  logger = inject(Logger)

  @Input({ required: true })
  inputPerson!: Person

  @Input({ required: true })
  id!: number

  add(): void {
    this.inputPerson.age++
  }

  constructor() {
    this.logger.log("constructor()")
  }

  ngOnInit(): void {
    this.logger.prefix = 'app-hook + ' + this.id
    this.logger.log("ngOnInit()")
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log("ngOnChanges()")
    console.log(changes)
  }

  ngDoCheck(): void {
    this.logger.log("ngDoCheck()")
  }

  ngAfterViewInit(): void {
    this.logger.log("ngAfterViewInit()")
  }

  ngAfterViewChecked(): void {
    this.logger.log("afterViewChecked()")
  }

  ngOnDestroy(): void {
    this.logger.log("ngOnDestroy()")
  }

  hooksMainComponent = inject(HooksMainComponent)

}