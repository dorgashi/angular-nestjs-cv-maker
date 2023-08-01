import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
    declarations: [ModalComponent, AuthModalComponent],
    imports: [CommonModule],
    exports: [ModalComponent, AuthModalComponent],
})
export class SharedModule {}
