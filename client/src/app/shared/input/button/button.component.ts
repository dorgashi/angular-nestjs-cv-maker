import { Component, Input, OnInit } from '@angular/core';
import {
    themeVariants,
    ThemeVariant,
    ThemeVariantMapping,
} from '../../constants/theme-variants';

const buttonClassMapping: ThemeVariantMapping = {
    primary:
        'text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-700 dark:hover:bg-blue-900 dark:focus:ring-blue-800',
    secondary: '',
    clear: '',
};

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    private sharedClasses = 'block';

    @Input() public variant: ThemeVariant = 'primary';
    @Input() public type: ButtonType = 'button';
    @Input() public modalTarget: string | null = null;
    @Input() public modalToggle: string | null = null;
    @Input() public classes: string | null = null;
    @Input() public icon: string | null = null;
    @Input() public width: string | null = null;
    @Input() public height: string | null = null;

    ngOnInit(): void {
        if (!themeVariants.includes(this.variant)) {
            this.variant = 'primary';
        }

        this.classes =
            this.sharedClasses + ' ' + buttonClassMapping[this.variant];
    }
}
