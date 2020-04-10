import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.css']
})
export class CifraComponent implements OnInit {  

  @ViewChild('musicPre2',{static: true}) musicPre2:ElementRef<any>;

musics: any[]
tom: string
C: string = 'Teste'
musicaC: any


constructor( private crudService: CrudService,
  private router: Router,
  private formBuilder: FormBuilder) { }


  trocaCifra(tom){
 
    if(tom == 'C'){
         // C -- (B)
      this.tom="C"  
  this.musicaC =  this.musics[0].endereco 
     
     
     
    }else if (tom == 'A#'){
   // B -- (A#)
   this.tom="A#"  
   var cifraAlterada = this.musics[0].endereco .replace(/>B/g , ">A");     
    cifraAlterada = cifraAlterada.replace(/>C/g , ">A#");  
    cifraAlterada = cifraAlterada.replace(/>D/g , ">C");  
    cifraAlterada = cifraAlterada.replace(/>E/g , ">D");  
    cifraAlterada = cifraAlterada.replace(/>F/g , ">D#");
    cifraAlterada = cifraAlterada.replace(/>G/g , ">F");
    cifraAlterada = cifraAlterada.replace(/>A/g , ">G");

  
   this.musicaC= cifraAlterada


    }else if (tom == 'A'){
      // C ================================= (A) 
      this.tom="A"  
      var cifraAlterada = this.musics[0].endereco   
      // ------ A Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>A</g , ">F#<");  
      cifraAlterada = cifraAlterada.replace(/>A4</g , ">F#4<");  
      cifraAlterada = cifraAlterada.replace(/>A7</g , ">F#7<");  
      cifraAlterada = cifraAlterada.replace(/>A7M</g , ">F#7M<");  
      cifraAlterada = cifraAlterada.replace(/>A9</g , ">F#9<");  
        // ------ A Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Am</g , ">F#m<");  
      cifraAlterada = cifraAlterada.replace(/>Am\/G</g , ">F#m/E<");  
      cifraAlterada = cifraAlterada.replace(/>A4</g , ">F#m4<");  
      cifraAlterada = cifraAlterada.replace(/>Am7</g , ">F#m7<");  
      cifraAlterada = cifraAlterada.replace(/>Am9</g , ">F#m9<");  
     // ------ C Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>C</g , ">A<"); 
      cifraAlterada = cifraAlterada.replace(/>C\/D</g , ">A/B<"); 
      cifraAlterada = cifraAlterada.replace(/>C4</g , ">A4<"); 
      cifraAlterada = cifraAlterada.replace(/>C7</g , ">A7<"); 
      cifraAlterada = cifraAlterada.replace(/>C7M</g , ">A7M<"); 
      cifraAlterada = cifraAlterada.replace(/>C9</g , ">A9<"); 
        // ------ C Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Cm</g , ">Am<"); 
      cifraAlterada = cifraAlterada.replace(/>Cm7</g , ">Am7<"); 
      cifraAlterada = cifraAlterada.replace(/>Cm9</g , ">Am9<"); 
      // ------ B Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>B4</g , ">G#4<");
      cifraAlterada = cifraAlterada.replace(/>B7</g , ">G#7<");
      cifraAlterada = cifraAlterada.replace(/>B7M</g , ">G#7M<");
      cifraAlterada = cifraAlterada.replace(/>B9</g , ">G#9<");
      cifraAlterada = cifraAlterada.replace(/>B</g , ">G#<");
        // ------ B Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Bm</g , ">G#m<");
      cifraAlterada = cifraAlterada.replace(/>Bm7</g , ">G#m7<");
      cifraAlterada = cifraAlterada.replace(/>Bm4</g , ">G#m4<");
      cifraAlterada = cifraAlterada.replace(/>Bm9</g , ">G#m9<");
      // ------ D Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>D</g , ">B<");
      cifraAlterada = cifraAlterada.replace(/>D7</g , ">B7<");
      cifraAlterada = cifraAlterada.replace(/>D7M</g , ">B7M<");
      cifraAlterada = cifraAlterada.replace(/>D4</g , ">B4<");
      cifraAlterada = cifraAlterada.replace(/>D9</g , ">B9<");
        // ------ D Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Dm4</g , ">Bm<");
      cifraAlterada = cifraAlterada.replace(/>Dm9</g , ">Bm<");
      cifraAlterada = cifraAlterada.replace(/>Dm</g , ">Bm<");
      cifraAlterada = cifraAlterada.replace(/>Dm\/C</g , ">Bm/A<");
      cifraAlterada = cifraAlterada.replace(/>Dm7</g , ">Bm7<");
       // ------ E Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Em</g , ">C#m<"); 
      cifraAlterada = cifraAlterada.replace(/>Em7</g , ">C#m7<");  
      cifraAlterada = cifraAlterada.replace(/>Em9</g , ">C#m9<"); 
        // ------ E Maior---  4, 7, 7M e 9 
      cifraAlterada = cifraAlterada.replace(/>E</g , ">C#<");   
      cifraAlterada = cifraAlterada.replace(/>E4</g , ">C#4<");  
      cifraAlterada = cifraAlterada.replace(/>E7</g , ">C#7<");  
      cifraAlterada = cifraAlterada.replace(/>E7M</g , ">C#7M<");  
      cifraAlterada = cifraAlterada.replace(/>E9</g , ">C#9<");  
      // ------ F Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>F</g , ">D<");
      cifraAlterada = cifraAlterada.replace(/>F\/A</g , ">D/F#<");
      cifraAlterada = cifraAlterada.replace(/>F\/G</g , ">D/E<");
      cifraAlterada = cifraAlterada.replace(/>F4</g , ">D4");
      cifraAlterada = cifraAlterada.replace(/>F7</g , ">D7<");
      cifraAlterada = cifraAlterada.replace(/>F7M</g , ">D7M<");
      cifraAlterada = cifraAlterada.replace(/>F9</g , ">D9<");
       // ------ F Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Fm</g , ">Dm<");
      cifraAlterada = cifraAlterada.replace(/>Fm7</g , ">Dm7<");
      cifraAlterada = cifraAlterada.replace(/>Fm9</g , ">Dm9<");
         // ------ G Maior---  4, 7, 7M e 9
      cifraAlterada = cifraAlterada.replace(/>G</g , ">E<");
      cifraAlterada = cifraAlterada.replace(/>G7M</g , ">E7M<");
      cifraAlterada = cifraAlterada.replace(/>G4</g , ">E4<");
      cifraAlterada = cifraAlterada.replace(/>G7</g , ">E7<");
      cifraAlterada = cifraAlterada.replace(/>G9</g , ">E9<");
      cifraAlterada = cifraAlterada.replace(/>G\/B</g , ">E/G#<");
         // ------ G Menor---  4, 7 e 9
      cifraAlterada = cifraAlterada.replace(/>Gm</g , ">Em<");
      cifraAlterada = cifraAlterada.replace(/>Gm4</g , ">Em4<");
      cifraAlterada = cifraAlterada.replace(/>Gm7</g , ">Em7<");
      cifraAlterada = cifraAlterada.replace(/>Gm9</g , ">Em9<");
    
   
     
     
       this.musicaC = cifraAlterada
       }
  }


ngOnInit(){
  this.crudService.getMusic().subscribe((data:any[]) => {
           
    this.musics = data;
       
     console.log(this.musics);
   });

}


}

