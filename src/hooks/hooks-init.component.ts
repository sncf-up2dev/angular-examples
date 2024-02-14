import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, forwardRef(() => TableauComponent)],
    template: `
    <app-tableau [size]="5"/>
    `,
    host: {
        'class': 'component-border'
    },
    styles: `
    `
})
export class HooksInitComponent {

}

@Component({
    selector: 'app-tableau',
    standalone: true,
    imports: [CommonModule],
    template: `
    {{ numberArray }}
    `,
    host: {
        'class': 'component-border'
    }
})
export class TableauComponent implements OnInit {

    @Input({ required: true })
    size!: number

    numberArray: number[] = []

    ngOnInit(): void {
        this.numberArray = [...Array(this.size)].map(() => Math.round(Math.random() * 10))
    }

}
