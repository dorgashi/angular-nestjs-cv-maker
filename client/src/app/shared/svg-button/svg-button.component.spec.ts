import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgButtonComponent } from './svg-button.component';

describe('SvgButtonComponent', (): void => {
    let component: SvgButtonComponent;
    let fixture: ComponentFixture<SvgButtonComponent>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            declarations: [SvgButtonComponent],
        });
        fixture = TestBed.createComponent(SvgButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
