import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent {
    constructor(private elementRef: ElementRef<HTMLElement>) {}

    @HostListener('focusout', ['$event']) onBlur(e: FocusEvent): void {
        if (e.relatedTarget) {
            if (this.elementRef.nativeElement.contains(e.relatedTarget as Node))
                return;

            const parent = (e.relatedTarget as Element).parentNode as Element;
            if (
                parent &&
                parent.getAttribute('data-dropdown-toggle') == this.id
            )
                return;
        }

        const dropDownList = document.querySelector(
            `#${this.id} .dropdown-list.collapsed`
        );

        if (!dropDownList) return;

        dropDownList.classList.remove('collapsed');
    }

    @Input() id = '';
}
