import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-root',
  templateUrl: './style-class-binding.component.html',
  styles: [`
    .texte-bleu {
        color: blue;
    }

    .texte-blanc {
        color: white;
    }

    .fond-gris {
        background-color: gray;
    }

    .contour-bleu {
        border: 5px solid blue;
    }
  `]
})
export class StyleClassBindingComponent {

  description = 'Exemples Binding Style / Classe'
  size = 50


  classObject = { 'texte-bleu': true, 'fond-gris': false, 'contour-bleu': null }
  classeArray = ['texte-blanc', 'fond-gris']
  classeString = 'texte-blanc fond-gris contour-bleu'


  styleObject = { color: 'white', 'background-color': 'blue' }
  styleString = 'font-size: 20px'

  maj(classe: string, style: string) {
    this.classeString = classe
    this.styleString = style
  }

}
