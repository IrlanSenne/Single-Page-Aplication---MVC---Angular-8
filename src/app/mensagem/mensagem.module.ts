import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensagemComponent } from './mensagem.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const ROUTES: Routes = [
    {path: '', component: MensagemComponent}
]

@NgModule({
    declarations: [
        MensagemComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule,
        ModalModule, RouterModule.forChild(ROUTES)],
        providers: [BsModalService],
        entryComponents: [MensagemComponent]
})
export class MensagemModule {}