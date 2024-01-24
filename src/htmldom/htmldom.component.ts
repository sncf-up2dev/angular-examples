import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './htmldom.component.html',
  styles: [''],

  standalone: true,
  imports: [CommonModule],
})
export class HtmldomComponent {

  condition: boolean = false;

  modifyHTML(element: HTMLInputElement) {
    element.setAttribute('VaLuE', element.value);
  }

  valeurComposant = "Property binding";

  modifyComposant() {
    this.valeurComposant = "Valeur modifiée"
  }

  i = 0;
  modifyComposantWithI() {
    this.valeurComposant = "Valeur modifiée " + this.i++;

  }

}
