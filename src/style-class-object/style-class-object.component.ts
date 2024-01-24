import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  templateUrl: './style-class-object.component.html',
  styleUrls: ['./style-class-object.component.css']
})
export class StyleClassObjectComponent {

  styles: Record<string, string> = { 'font-size': '40px' }

  addStyle(key: string, value: string) {
    this.styles[key] = value;
    console.log(this.styles)
  }

  refresh() {
    this.styles = { ...this.styles }
  }

}
