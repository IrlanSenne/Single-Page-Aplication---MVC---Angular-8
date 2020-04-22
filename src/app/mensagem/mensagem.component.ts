import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  orderForm: FormGroup
  emailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:  this.formBuilder.control('', [Validators.required, Validators.minLength(5) ]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern) ]),
      mensagem:  this.formBuilder.control('', [Validators.required, Validators.minLength(5) ])
    })
  }

}
