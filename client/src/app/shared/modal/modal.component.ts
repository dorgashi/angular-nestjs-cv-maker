import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() public modalId = 'defaultModal';
    @Input() public modalTitle = 'Modal Title';
    @Input() public modalConfirmBtnText = 'Confirm';
    @Input() public modalCancelBtnText = 'Cancel';
    @Input() public showHeader = true;
    @Input() public showFooter = true;
}
