import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-leaf-a',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
        Compteur A : {{ cpt }} <button (click)="cpt = cpt + 1; onClick.emit(cpt)" >++</button> 
    </div>
  `,
  styles: ['']
})
export class LeafAComponent {
  @Output()
  onClick = new EventEmitter<number>()

  cpt = 0
}

@Component({
  selector: 'app-branch-a',
  standalone: true,
  imports: [CommonModule, LeafAComponent],
  template: `
    <div class="border">
        Sous composant A
        <app-leaf-a (onClick)="onClick.emit($event)" />
    </div>
  `,
  styles: ['']
})
export class BranchAComponent {
  @Output()
  onClick = new EventEmitter<number>()
}

@Component({
  selector: 'app-root-a',
  standalone: true,
  imports: [CommonModule, BranchAComponent],
  template: `
    <div class="border">
        Feature A
        <app-branch-a (onClick)="onClick.emit($event)"  />
    </div>
  `,
  styles: ['']
})
export class RootAComponent {
  @Output()
  onClick = new EventEmitter<number>()
}

@Component({
  selector: 'app-root-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border">
        Feature B - Valeur du compteur : {{ cpt }}
    </div>
  `,
  styles: ['']
})
export class RootBComponent {
  @Input()
  cpt = 0
}

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RootAComponent, RootBComponent],
  template: `
    <app-root-a (onClick)="cpt = $event" />
    <app-root-b [cpt]="cpt" />
  `,
  styles: `
  
  `
})
export class BubblingComponent {
  cpt = 0
}

