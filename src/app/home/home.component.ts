import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CrudService } from '../crud.service';
import { FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "35px",
        
      })),
      transition('* => *', animate('400ms 0s ease-in-out'))
    ]),
    trigger('lupa', [
      state('big', style({       
        "font-size": "100px",
      })),
      state('small', style({
        "top": "-20px",
        "font-size": "30px"
      })),
      transition('big => small', animate('300ms 0s ease-in-out')),
      transition('small => big', animate('300ms 0s ease-in-out'))
    ])
  ]
 
  
})
export class HomeComponent implements OnInit {
  informaation: boolean = true
  lupaState = 'small'
  searchBarState = 'visible'
  titulo: any[] = []
  queryField: FormControl
  pesquisa: string
  noResult = false;

 typeaheadNoResults(event: boolean): void {
  this.noResult = event;
}


 aumentaDiminui(){
 
   if( this.lupaState == 'small'){
    this.lupaState = 'big'
    this.informaation = true 
   }else{
     this.lupaState = 'small'
     this.informaation = false 
   }
   if( this.searchBarState == 'visible'){
    this.searchBarState = 'hidden'
    this.informaation = false 
   }else{
     this.searchBarState = 'visible'
     this.informaation = true 
   }
  
 }

  constructor(private crudService : CrudService,
              ) { }
              

  ngOnInit() { 
      // DADOS DIANTE DO TRONO
    this.crudService.getDt().subscribe(res => {
      for(let i=0; i< res.length; i++){
        this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/dt'})     
       
      }     
    })
    // DADOS CORINHOS    
    this.crudService.getMusic().subscribe(res => {
      for(let i=0; i< res.length; i++){
        this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/corinhos'})   
  
      }     
    })

     // DADOS Morada    
     this.crudService.getMorada().subscribe(res => {
      for(let i=0; i< res.length; i++){
        this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/morada'})   
  
      }     
    })
   // DADOS Gabriela Rocha    
   this.crudService.getGabrielaRocha().subscribe(res => {
    for(let i=0; i< res.length; i++){
      this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/gabriela-rocha'})   

    }     
  })
   // DADOS Ministério Zoe  
   this.crudService.getZoe().subscribe(res => {
    for(let i=0; i< res.length; i++){
      this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/zoe'})   

    }     
  })
   // DADOS Isaias Saas  
   this.crudService.isaiasSaad().subscribe(res => {
    for(let i=0; i< res.length; i++){
      this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/isaias-saad'})   

    }     
  })
   // DADOS Casa Worship  
   this.crudService.casaWorship().subscribe(res => {
    for(let i=0; i< res.length; i++){
      this.titulo.push({titulo: res[i].titulo, id: res[i].id , banda: res[i].banda, url: '/casa-worship'})   

    }     
  })


  }

}
