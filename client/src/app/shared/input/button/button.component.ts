import {
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';
import {
    themeVariants,
    ThemeVariant,
    ThemeVariantMapping,
} from '../../constants/theme-variants';

const buttonClassMapping: ThemeVariantMapping = {
    primary:
        'text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-1 focus:outline-none bg-slate-700 ring-slate-700 hover:bg-slate-800 hover:ring-slate-800 dark:bg-slate-500 dark:ring-slate-500 dark:hover:bg-slate-700 dark:hover:ring-slate-300',
    secondary: '',
    clear: '',
    icon: 'text-white font-medium rounded-lg text-sm px-2 py-0 text-center ring-1 focus:outline-none bg-slate-700 ring-slate-700 hover:bg-slate-800 hover:ring-slate-800 dark:bg-slate-500 dark:ring-slate-500 dark:hover:bg-slate-700 dark:hover:ring-slate-300',
};

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    private sharedClasses = 'block h-full';

    @Input() public variant: ThemeVariant = 'primary';
    @Input() public type: ButtonType = 'button';
    @Input() public modalTarget: string | null = null;
    @Input() public modalToggle: string | null = null;
    @Input() public dropDownToggle: string | null = null;
    @Input() public classes: string | null = null;
    @Input() public width: string | null = null;
    @Input() public height: string | null = null;

    constructor(private elementRef: ElementRef) {}

    @HostListener('click', ['$event']) onClick(): void {
        if (!this.dropDownToggle) return;

        const dropDownElement = document.querySelector(
            `#${this.dropDownToggle} .dropdown-list`
        ) as HTMLElement;

        if (!dropDownElement) return;

        if (dropDownElement.classList.contains('collapsed')) {
            dropDownElement.classList.remove('collapsed');
        } else {
            dropDownElement.classList.add('collapsed');
            window.requestAnimationFrame((): void => dropDownElement.focus());
        }
    }

    ngOnInit(): void {
        if (!themeVariants.includes(this.variant)) {
            this.variant = 'primary';
        }

        this.classes =
            this.sharedClasses + ' ' + buttonClassMapping[this.variant];

        if (this.dropDownToggle)
            this.elementRef.nativeElement.setAttribute(
                'data-dropdown-toggle',
                this.dropDownToggle
            );
    }
}
