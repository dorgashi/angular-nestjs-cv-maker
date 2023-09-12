import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './input/button/button.component';
import { SvgComponent } from './svg/svg.component';
import { SvgButtonComponent } from './svg-button/svg-button.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';

@NgModule({
    declarations: [
        ModalComponent,
        AuthModalComponent,
        HeaderComponent,
        ButtonComponent,
        SvgComponent,
        SvgButtonComponent,
        DropdownListComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        ModalComponent,
        AuthModalComponent,
        HeaderComponent,
        ButtonComponent,
    ],
})
export class SharedModule {}
