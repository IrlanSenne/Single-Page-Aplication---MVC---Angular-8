import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cifra-gabriela-rocha',
  templateUrl: './cifra-gabriela-rocha.component.html',
  styleUrls: ['./cifra-gabriela-rocha.component.css']
})
export class CifraGabrielaRochaComponent implements OnInit {

  // Objeto do Banco
  musics: any[] 
  // Testes
  C: string = 'Teste'
  musicaC: any
  musicaA: any
  // Titulo e Banda
  titulo: string
  banda: string
  // Tom original x Tom alterado
  original: string
  tom: string
  // Variáveis de cifra alterada
  musica_C: any
  musica_Cs: any
  musica_D: any
  musica_Ds: any
  musica_E: any
  musica_F: any
  musica_Fs: any
  musica_G: any
  musica_Gs: any
  musica_A: any
  musica_As: any
  musica_B: any
  // Recebe as variáveis alteradas acima
  musicaAlterada: any
  musicSelecionada : any
  info: boolean = true
  
  constructor( private crudService: CrudService,
    private route: ActivatedRoute
  ) { }
  
    // Função para definir Tom final 
    trocaCifra(tom){
    
      if(tom == 'C'){
    this.musicaAlterada = this.musica_C
    this.original = 'C'
      }else if(tom == 'C#'){
        this.musicaAlterada = this.musica_Cs
        this.original = 'C#'
      }else if(tom == 'D'){
        this.musicaAlterada = this.musica_D
        this.original = 'D'
      }else if(tom == 'D#'){
        this.musicaAlterada = this.musica_Ds
        this.original = 'Eb'
      }else if(tom == 'E'){
        this.musicaAlterada = this.musica_E
        this.original = 'E'
      }else if(tom == 'F'){
        this.musicaAlterada = this.musica_F
        this.original = 'F'
      }else if(tom == 'F#'){
        this.musicaAlterada = this.musica_Fs
        this.tom = 'F#'
      }else if(tom == 'G'){
        this.musicaAlterada = this.musica_G
        this.original = 'G'
      }else if(tom == 'G#'){
        this.musicaAlterada = this.musica_Gs
        this.original = 'G#'
      }else if(tom == 'A'){
        this.musicaAlterada = this.musica_A
        this.original = 'A'
      }else if(tom == 'A#'){
        this.musicaAlterada = this.musica_As
        this.original = 'Bb'
      }else if(tom == 'B'){
        this.musicaAlterada = this.musica_B
        this.original = 'B'
      }
    }
  
    tom_C(id){
    var cifraC =  this.musics[id].cifra; this.musica_C  = this.crudService.dodo(cifraC) 
  
    var cifraCs =  this.musics[id].cifra; this.musica_Cs  = this.crudService.dodos(cifraCs) 
  
    var cifraD =  this.musics[id].cifra; this.musica_D  = this.crudService.dore(cifraD)    
  
    var cifraDs =  this.musics[id].cifra; this.musica_Ds  = this.crudService.dores(cifraDs)   
  
    var cifraE =  this.musics[id].cifra; this.musica_E  = this.crudService.domi(cifraE)   
  
    var cifraF =  this.musics[id].cifra; this.musica_F  = this.crudService.dofa(cifraF)  
  
    var cifraFs =  this.musics[id].cifra; this.musica_Fs  = this.crudService.dofas(cifraFs)  
  
    var cifraG =  this.musics[id].cifra; this.musica_G  = this.crudService.dosol(cifraG)        
   
    var cifraGs =  this.musics[id].cifra; this.musica_Gs = this.crudService.dosols(cifraGs)    
  
    var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.dola(cifraA)    
  
    var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.dolas(cifraAs)    
  
    var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.dosi(cifraB)        
  
    }
    tom_D(id){
   
    var cifraC =  this.musics[id].cifra;  this.musica_C  = this.crudService.redo(cifraC)  
  
    var cifraCs =  this.musics[id].cifra;  this.musica_Cs  = this.crudService.redos(cifraCs) 
  
    var cifraD =  this.musics[id].cifra;  this.musica_D  = this.crudService.rere(cifraD) 
  
    var cifraDs =  this.musics[id].cifra;  this.musica_Ds  = this.crudService.reres(cifraDs) 
  
    var cifraE =  this.musics[id].cifra;  this.musica_E  = this.crudService.remi(cifraE)  
  
    var cifraF =  this.musics[id].cifra;  this.musica_F  = this.crudService.refa(cifraF) 
  
    var cifraFs =  this.musics[id].cifra;this.musica_Fs  = this.crudService.refas(cifraFs) 
  
    var cifraG =  this.musics[id].cifra; this.musica_G  = this.crudService.resol(cifraG)  
  
    var cifraGs =  this.musics[id].cifra; this.musica_Gs  = this.crudService.resols(cifraGs)  
  
    var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.rela(cifraA)  
  
    var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.relas(cifraAs)
  
    var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.resi(cifraB)
  
    }
    tom_E(id){
      var cifraC =  this.musics[id].cifra ;    this.musica_C  = this.crudService.mido(cifraC)
  
      var cifraCs =  this.musics[id].cifra ;    this.musica_Cs  = this.crudService.midos(cifraCs)    
      
      var cifraD =  this.musics[id].cifra;    this.musica_D  = this.crudService.mire(cifraD)    
      
      var cifraDs =  this.musics[id].cifra; this.musica_Ds  = this.crudService.mires(cifraDs)   
      
      var cifraE =  this.musics[id].cifra;  this.musica_E  = this.crudService.mimi(cifraE)    
      
      var cifraF =  this.musics[id].cifra; this.musica_F  = this.crudService.mifa(cifraF)    
      
      var cifraFs =  this.musics[id].cifra ;this.musica_Fs  = this.crudService.mifas(cifraFs)    
      
      var cifraG =  this.musics[id].cifra ; this.musica_G  = this.crudService.misol(cifraG)   
      
      var cifraGs =  this.musics[id].cifra ; this.musica_Gs  = this.crudService.misols(cifraGs)    
      
      var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.mila(cifraA)    
      
      var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.milas(cifraAs)   
      
      var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.misi(cifraB)   
      
      }
    tom_F(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.fado(cifraC)
  
    var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.fados(cifraCs)
  
    var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.fare(cifraD)
  
    var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.fares(cifraDs)
  
    var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.fami(cifraE)
  
    var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.fafa(cifraF)
  
    var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.fafas(cifraFs)
  
    var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.fasol(cifraG)
  
    var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.fasols(cifraGs)
  
    var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.fala(cifraA)
  
    var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.falas(cifraAs)
  
    var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.fasi(cifraB)
      
      }
    tom_G(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.soldo(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.soldos(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.solre(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.solres(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.solmi(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.solfa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.solfas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.solsol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.solsols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.solla(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.sollas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.solsi(cifraB)
    }
    tom_A(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.lado(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.lados(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.lare(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.lares(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.lami(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.lafa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.lafas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.lasol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.lasols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.lala(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.lalas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.lasi(cifraB)
    }
    tom_B(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.sido(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.sidos(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.sire(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.sires(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.simi(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.sifa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.sifas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.sisol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.sisols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.sila(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.silas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.sisi(cifraB)
    }

  ngOnInit() {

   
        //====================== Gabriela Rocha =====================
  
    
        this.crudService.getGabrielaRocha().subscribe((data:any[]) => {
  
          this.musics = data;
          var id= this.route.snapshot.params['id'] - 1
          this.original = this.musics[id ].tom
          this.titulo = this.musics[id ].titulo
          this.banda = this.musics[id ].banda
          this.musicaAlterada = this.musics[id ].cifra.replace(/<b>/g, "<b><font color='red'>").replace(/<\/b>/g, "</font></b>")
         
           // Define o tom de origem - falta pegar id da música
               if ((this.original == 'C') || (this.original == 'Am')){ this.tom_C(id ); }             
          else if ((this.original == 'D') || (this.original == 'Bm')){ this.tom_D(id ); }
          else if ((this.original == 'E') || (this.original == 'C#m')){ this.tom_E(id ); }
          else if ((this.original == 'F') || (this.original == 'Dm')){ this.tom_F(id ); }
          else if ((this.original == 'G') || (this.original == 'Em')){ this.tom_G(id ); }
          else if ((this.original == 'A') || (this.original == 'F#m')){ this.tom_A(id ); }
          else if ((this.original == 'B') || (this.original == 'G#m')){ this.tom_B(id ); }    
          else {this.original = ''; this.info = false}
      
         });
      
  }

}
