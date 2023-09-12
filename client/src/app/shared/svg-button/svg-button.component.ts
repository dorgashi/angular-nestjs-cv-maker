import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-button',
    templateUrl: './svg-button.component.html',
    styleUrls: ['./svg-button.component.scss'],
})
export class SvgButtonComponent {
    @Input() public modalTarget: string | null = null;
    @Input() public modalToggle: string | null = null;
    @Input() public dropDownToggle: string | null = null;
    @Input() type = '';
}
