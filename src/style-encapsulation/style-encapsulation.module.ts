import { NgModule } from '@angular/core';
import { StyleRootComponent } from './style-root.component';
import { BrowserModule } from '@angular/platform-browser';

import { EmulatedComponent, HostContextComponent, NoneComponent, ShadowComponent } from './component';

@NgModule({
  declarations: [
    EmulatedComponent,
    NoneComponent,
    ShadowComponent,
    StyleRootComponent,
    HostContextComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [
    StyleRootComponent
  ]
})
export class StyleEncapsulationModule { }
