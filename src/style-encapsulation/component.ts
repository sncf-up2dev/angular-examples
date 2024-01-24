import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `
  <div>
    <p class="shared">
      Emulated : Rouge
    </p>
  </div>
  `,
  styles: [`
    :host .shared {
      color: red;
    }
    
    :host {
      display: block;
      border: solid;
    }
  `],
})
export class EmulatedComponent {

}

@Component({
  selector: 'app-none',
  template: `
    <p class="shared">
      None : Vert
    </p>
  `,
  styles: [`
    .shared {
      color: green;
    }
    :host {
      display: block;
      border: dotted;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {

}

@Component({
  selector: 'app-shadow',
  template: `
    <p class="shared">
      Shadow : Bleu
    </p>
  `,
  styles: [`

    :host {
      display: block;
      border: solid;
    }

    .shared {
      color: blue;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {

}

@Component({
  selector: 'app-host-context',
  template: `
    <p class="shared">
      HostContext : Couleur à définir dans le parent
    </p>
  `,
  styles: [`
      :host-context(.red-theme) .shared {
        color: red;
      }
      :host-context(.blue-theme) .shared {
        color: blue;
      }
  `],
})
export class HostContextComponent {

}