import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { CrudService } from '../cifra/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  @ViewChild('musicPre2',{static: true}) musicPre2:ElementRef<any>;

  musics: any[]
  G: string
  orderForm: FormGroup


  constructor(private crudService: CrudService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }



  enviarMusica(musica){
   console.log(this.musics[0].endereco) 
  
   var cifraAlterada = this.musics[0].endereco .replace(/<b>G/g , "G#");
    cifraAlterada = cifraAlterada.replace(/<\/b>/g , "");
    cifraAlterada = cifraAlterada.replace(/<\/b>/g , "");
   this.musics[0].endereco = cifraAlterada
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      music:  this.formBuilder.control('', [Validators.required ]),
     
    }); 
  
    this.crudService.getMusic().subscribe((data:any[]) => {
           
      this.musics = data;
         
       console.log(this.musics);
     });

 
  }

}
