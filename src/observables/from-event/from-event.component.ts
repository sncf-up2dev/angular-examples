import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #input/>
    <button #button>Click Me !</button>
    <video #video controls>
      <source src="assets/video.mp4"/>
    </video>
  `,
  styles: ``
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>

  @ViewChild('button')
  button!: ElementRef<HTMLButtonElement>

  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'input').subscribe(console.log)
    fromEvent(this.button.nativeElement, 'click').subscribe(console.log)
    fromEvent(this.video.nativeElement, 'play').subscribe(console.log)
  }

}
