import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Angular + Nest.js CV Maker';

    ngOnInit(): void {
        initFlowbite();
    }
}
