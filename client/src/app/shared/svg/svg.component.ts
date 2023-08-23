import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.html',
    styleUrls: ['./svg.component.scss'],
})
export class SvgComponent implements OnInit {
    @HostBinding('class') class = 'app-svg';

    public href = '';

    @Input() type = '';
    @Input() stroke = '';
    @Input() fill = '';
    @Input() width = '24';
    @Input() height = '24';

    ngOnInit(): void {
        this.href = `/assets/images/sprites/svg.svg#${this.type}`;
    }
}
