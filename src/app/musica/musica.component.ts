import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  //Numero de músicas
numeroMusicas:number
numeroMusicasDT:number
numeroMorada: number
numeroGabrielaRocha:number
numeroZoe: number
isaiasSaad: number
casaWorship: number

  constructor( private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getMusic().subscribe(musicas => this.numeroMusicas = musicas.length)
    this.crudService.getDt().subscribe(dt => this.numeroMusicasDT = dt.length)
    this.crudService.getMorada().subscribe(morada => this.numeroMorada = morada.length)
    this.crudService.getGabrielaRocha().subscribe(gb => this.numeroGabrielaRocha = gb.length)
    this.crudService.getZoe().subscribe(zoe => this.numeroZoe = zoe.length)
    this.crudService.isaiasSaad().subscribe(banda => this.isaiasSaad = banda.length)
    this.crudService.casaWorship().subscribe(banda => this.casaWorship = banda.length)
  }

}
