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
         // C 
      this.tom="C"  
  this.musicaC =  this.musics[0].endereco

     
    }else if (tom == 'D') {
        // C ================================= (D)       
        this.tom="D"  
        var cifraAlterada = this.musics[0].endereco   
           
        this.musicaC  = cifraAlterada
       .replace(/>D/g, "> E")
       .replace(/>C/g, "> D")
       .replace(/>B/g, "> C#")
       .replace(/>A/g, "> B")
       .replace(/>G/g, "> A")
       .replace(/>F/g, "> G")
       .replace(/>E/g, "> F#") 
       .replace(/\/D/g, " /E")
       .replace(/\/C/g, " /D")
       .replace(/\/B/g, " /C#")
       .replace(/\/A/g, " /B")
       .replace(/\/G/g, " /A")
       .replace(/\/F/g, " /G")
       .replace(/\/E/g, " /F#")
       .replace(/<b>/g, "<b><font color='red'>")
       .replace(/<\/b>/g, "</font></b>")
       .replace(/[\s]\//g, "/"); // Espaço da barra ;

    }else if (tom == 'E') {
      // C ================================= (E)       
      this.tom="E"  
      var cifraAlterada = this.musics[0].endereco        
         
      this.musicaC  = cifraAlterada
       .replace(/>D/g, "> F#")
       .replace(/>C/g, "> E")
       .replace(/>B/g, "> D#")
       .replace(/>A/g, "> C#")
       .replace(/>G/g, "> B")
       .replace(/>F/g, "> A")
       .replace(/>E/g, "> G#") 
       .replace(/\/D/g, " /F#")
       .replace(/\/C/g, " /E")
       .replace(/\/B/g, " /D#")
       .replace(/\/A/g, " /C#")
       .replace(/\/G/g, " /B")
       .replace(/\/F/g, " /A")
       .replace(/\/E/g, " /G#")
       .replace(/<b>/g, "<b><font color='red'>")
       .replace(/<\/b>/g, "</font></b>")
       .replace(/[\s]\//g, "/"); // Espaço da barra 

  }else if (tom == 'F') {
    // C ================================= (F)       
    this.tom="F"  
    var cifraAlterada = this.musics[0].endereco        
       
    this.musicaC  = cifraAlterada
     .replace(/>D/g, "> G")
     .replace(/>C/g, "> F")
     .replace(/>B/g, "> E")
     .replace(/>A/g, "> D")
     .replace(/>G/g, "> C")
     .replace(/>F/g, "> Bb")
     .replace(/>E/g, "> A") 
     .replace(/\/D/g, " /G")
     .replace(/\/C/g, " /F")
     .replace(/\/B/g, " /E")
     .replace(/\/A/g, " /D")
     .replace(/\/G/g, " /C")
     .replace(/\/F/g, " /Bb")
     .replace(/\/E/g, " /A")
     .replace(/<b>/g, "<b><font color='red'>")
     .replace(/<\/b>/g, "</font></b>")
     .replace(/[\s]\//g, "/"); // Espaço da barra 

}else if (tom == 'G') {
  // C ================================= (G)       
  this.tom="G"  
  var cifraAlterada = this.musics[0].endereco        
     
  this.musicaC  = cifraAlterada
   .replace(/>D/g, "> A")
   .replace(/>C/g, "> G")
   .replace(/>B/g, "> F#")
   .replace(/>A/g, "> E")
   .replace(/>G/g, "> D")
   .replace(/>F/g, "> C")
   .replace(/>E/g, "> B") 
   .replace(/\/D/g, " /A")
   .replace(/\/C/g, " /G")
   .replace(/\/B/g, " /F#")
   .replace(/\/A/g, " /E")
   .replace(/\/G/g, " /D")
   .replace(/\/F/g, " /C")
   .replace(/\/E/g, " /B")
   .replace(/<b>/g, "<b><font color='red'>")
   .replace(/<\/b>/g, "</font></b>")
   .replace(/[\s]\//g, "/"); // Espaço da barra 

}
else if (tom == 'A') {
  // C ================================= (A)       
  this.tom="A"  
  var cifraAlterada = this.musics[0].endereco        
     
  this.musicaC  = cifraAlterada
   .replace(/>D/g, "> B")
   .replace(/>C/g, "> A")
   .replace(/>B/g, "> G#")
   .replace(/>A/g, "> F#")
   .replace(/>G/g, "> E")
   .replace(/>F/g, "> D")
   .replace(/>E/g, "> C#") 
   .replace(/\/D/g, " /B")
   .replace(/\/C/g, " /A")
   .replace(/\/B/g, " /G#")
   .replace(/\/A/g, " /F#")
   .replace(/\/G/g, " /E")
   .replace(/\/F/g, " /D")
   .replace(/\/E/g, " /C#")
   .replace(/<b>/g, "<b><font color='red'>")
   .replace(/<\/b>/g, "</font></b>")
   .replace(/[\s]\//g, "/"); // Espaço da barra 

}
else if (tom == 'B') {
  // C ================================= (B)       
  this.tom="B"  
  var cifraAlterada = this.musics[0].endereco        
     
  this.musicaC  = cifraAlterada
   .replace(/>D/g, "> C#")
   .replace(/>C/g, "> B")
   .replace(/>B/g, "> A#")
   .replace(/>A/g, "> G#")
   .replace(/>G/g, "> F#")
   .replace(/>F/g, "> E")
   .replace(/>E/g, "> D#") 
   .replace(/\/D/g, " /C#")
   .replace(/\/C/g, " /B")
   .replace(/\/B/g, " /A#")
   .replace(/\/A/g, " /G#")
   .replace(/\/G/g, " /F#")
   .replace(/\/F/g, " /E")
   .replace(/\/E/g, " /D#")
   .replace(/<b>/g, "<b><font color='red'>")
   .replace(/<\/b>/g, "</font></b>")
   .replace(/[\s]\//g, "/"); // Espaço da barra 

}

  }


ngOnInit(){
  this.crudService.getMusic().subscribe((data:any[]) => {
           
    this.musics = data;
  
   });

}


}

