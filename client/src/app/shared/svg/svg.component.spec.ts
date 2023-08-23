import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';

describe('SvgComponent', (): void => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            declarations: [SvgComponent],
        });
        fixture = TestBed.createComponent(SvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
