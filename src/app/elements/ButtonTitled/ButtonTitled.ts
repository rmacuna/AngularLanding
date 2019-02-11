import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ButtonTitled',
    templateUrl: './ButtonTitled.html',
    styleUrls: ['./ButtonTitled.sass']
})
export class ButtonTitledComponent {
    @Input() title: string;
}
