import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', (): void => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent],
        });
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
