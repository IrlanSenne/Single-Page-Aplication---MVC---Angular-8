import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.css']
})
export class CifraComponent implements OnInit {  


 


  n = [ 'C','C#','D','D#','E','F','F#','G','G#','A','A#','B' ]

  C : string
  Cs: string
  D : string
  Ds : string
  E : string
  F : string
  Fs : string
  G : string
  Gs : string
  A : string
  As : string
  B : string
  
  tons: string[] =['do','dos','re','res','mi','fa','fas','sol','sols','la','las','si'] 
  c: string = this.tons[0]
  cs: string = this.tons[1]
  d: string = this.tons[2]
  ds: string = this.tons[3]
  e: string = this.tons[4]
  f: string = this.tons[5]
  fs: string = this.tons[6]
  g: string = this.tons[7]
  gs: string = this.tons[8]
  a: string = this.tons[9]
  bb: string = this.tons[10]
  b: string = this.tons[11]

  trocaCifra (tom){ 
  
    if(tom == 'la'){
      this.C = this.n[2]
      this.Cs = this.n[3]
      this.D = this.n[4]
      this.Ds = this.n[5]
      this.E = this.n[6]
      this.F = this.n[7]
      this.Fs = this.n[8]
      this.G = this.n[9]
      this.Gs = this.n[10]
      this.A = this.n[11]
      this.As = this.n[0]
      this.B = this.n[1]
    }else if(tom == 'las'){
      this.C = this.n[3]
      this.Cs = this.n[4]
      this.D = this.n[5]
      this.Ds = this.n[6]
      this.E = this.n[7]
      this.F = this.n[8]
      this.Fs = this.n[9]
      this.G = this.n[10]
      this.Gs = this.n[11]
      this.A = this.n[0]
      this.As = this.n[1]
      this.B = this.n[2]
    } else if(tom == 'si'){
      this.C = this.n[4]
      this.Cs = this.n[5]
      this.D = this.n[6]
      this.Ds = this.n[7]
      this.E = this.n[8]
      this.F = this.n[9]
      this.Fs = this.n[10]
      this.G = this.n[11]
      this.Gs = this.n[0]
      this.A = this.n[1]
      this.As = this.n[2]
      this.B = this.n[3]
    } else if(tom == 'do'){
      this.C = this.n[5]
      this.Cs = this.n[6]
      this.D = this.n[7]
      this.Ds = this.n[8]
      this.E = this.n[9]
      this.F = this.n[10]
      this.Fs = this.n[11]
      this.G = this.n[0]
      this.Gs = this.n[1]
      this.A = this.n[2]
      this.As = this.n[3]
      this.B = this.n[4]
    }else if(tom == 'dos'){
      this.C = this.n[6]
      this.Cs = this.n[7]
      this.D = this.n[8]
      this.Ds = this.n[9]
      this.E = this.n[10]
      this.F = this.n[11]
      this.Fs = this.n[0]
      this.G = this.n[1]
      this.Gs = this.n[2]
      this.A = this.n[3]
      this.As = this.n[4]
      this.B = this.n[5]
    } else if(tom == 're'){
      this.C = this.n[7]
      this.Cs = this.n[8]
      this.D = this.n[9]
      this.Ds = this.n[10]
      this.E = this.n[11]
      this.F = this.n[0]
      this.Fs = this.n[1]
      this.G = this.n[2]
      this.Gs = this.n[3]
      this.A = this.n[4]
      this.As = this.n[5]
      this.B = this.n[6]
    }else if(tom == 'res'){
      this.C = this.n[8]
      this.Cs = this.n[9]
      this.D = this.n[10]
      this.Ds = this.n[11]
      this.E = this.n[0]
      this.F = this.n[1]
      this.Fs = this.n[2]
      this.G = this.n[3]
      this.Gs = this.n[4]
      this.A = this.n[5]
      this.As = this.n[6]
      this.B = this.n[7]
    }else if(tom == 'mi'){
      this.C = this.n[9]
      this.Cs = this.n[10]
      this.D = this.n[11]
      this.Ds = this.n[0]
      this.E = this.n[1]
      this.F = this.n[2]
      this.Fs = this.n[3]
      this.G = this.n[4]
      this.Gs = this.n[5]
      this.A = this.n[6]
      this.As = this.n[7]
      this.B = this.n[8]
    }else if(tom == 'fa'){
      this.C = this.n[10]
      this.Cs = this.n[11]
      this.D = this.n[0]
      this.Ds = this.n[1]
      this.E = this.n[2]
      this.F = this.n[3]
      this.Fs = this.n[4]
      this.G = this.n[5]
      this.Gs = this.n[6]
      this.A = this.n[7]
      this.As = this.n[8]
      this.B = this.n[9]
    }else if(tom == 'fas'){
      this.C = this.n[11]
      this.Cs = this.n[0]
      this.D = this.n[1]
      this.Ds = this.n[2]
      this.E = this.n[3]
      this.F = this.n[4]
      this.Fs = this.n[5]
      this.G = this.n[6]
      this.Gs = this.n[7]
      this.A = this.n[8]
      this.As = this.n[9]
      this.B = this.n[10]
    }else if(tom == 'sol'){
      this.C = this.n[0]
      this.Cs = this.n[1]
      this.D = this.n[2]
      this.Ds = this.n[3]
      this.E = this.n[4]
      this.F = this.n[5]
      this.Fs = this.n[6]
      this.G = this.n[7]
      this.Gs = this.n[8]
      this.A = this.n[9]
      this.As = this.n[10]
      this.B = this.n[11]
    }else if(tom == 'sols'){
      this.C = this.n[1]
      this.Cs = this.n[2]
      this.D = this.n[3]
      this.Ds = this.n[4]
      this.E = this.n[5]
      this.F = this.n[6]
      this.Fs = this.n[7]
      this.G = this.n[8]
      this.Gs = this.n[9]
      this.A = this.n[10]
      this.As = this.n[11]
      this.B = this.n[0]
    }
  }

  constructor(private crudService: CrudService,
               private router: Router,
             ) { }

musics: any[]


  ngOnInit() {


    this.crudService.getMusic().subscribe((data:any[]) => {
     
     this.musics = data;
    

      console.log(this.musics);
    })

    this.C = this.n[0]
    this.Cs = this.n[1]
    this.D = this.n[2]
    this.Ds = this.n[3]
    this.E = this.n[4]
    this.F = this.n[5]
    this.Fs = this.n[6]
    this.G = this.n[7]
    this.Gs = this.n[8]
    this.A = this.n[9]
    this.As = this.n[10]
    this.B = this.n[11]
  }

}
