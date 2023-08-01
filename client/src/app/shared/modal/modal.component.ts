import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input()
    public modalId: string = 'defaultModal';
    @Input()
    public modalTitle: string = 'Modal Title';
    @Input()
    public modalConfirmBtnText: string = 'Confirm';
    @Input()
    public modalCancelBtnText: string = 'Cancel';
    @Input()
    public showHeader: boolean = true;
    @Input()
    public showFooter: boolean = true;
}
