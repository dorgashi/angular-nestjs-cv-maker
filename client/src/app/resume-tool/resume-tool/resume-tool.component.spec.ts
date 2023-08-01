import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeToolComponent } from './resume-tool.component';

describe('ResumeToolComponent', () => {
    let component: ResumeToolComponent;
    let fixture: ComponentFixture<ResumeToolComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ResumeToolComponent],
        });
        fixture = TestBed.createComponent(ResumeToolComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
