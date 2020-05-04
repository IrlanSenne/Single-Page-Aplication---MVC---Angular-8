import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css'],
  animations: [
    trigger('posModal', [
      state('hidden', style({
        opacity: 0,
        "top": "-510px"
      })),
      state('visible', style({
        opacity: 1,
        "top": "0px",
        
      })),
      transition('hidden => visible', animate('2000ms 0s ease-in-out'))
    ])
  ]
})
export class MensagemComponent implements OnInit {
  posState = 'hidden'
  orderForm: FormGroup
  emailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  modalRef: BsModalRef;
  
  constructor( private formBuilder: FormBuilder,
               private modalService: BsModalService,
               private crudService: CrudService
              ) { }

  modalref(){
    this.modalRef.hide()
   this.posState = 'visible'
 }            
  enviar(template: TemplateRef<any>) {   
    this.crudService.mensagem(this.orderForm.value).subscribe( mensagem => {
      this.modalRef = this.modalService.show(template);
      this.orderForm.reset();
    })
     
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:  this.formBuilder.control('', [Validators.required, Validators.minLength(5) ]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern) ]),
      mensagem:  this.formBuilder.control('', [Validators.required, Validators.minLength(5) ])
    })
  }

}
