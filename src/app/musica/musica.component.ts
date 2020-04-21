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


  constructor( private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getMusic().subscribe(musicas => this.numeroMusicas = musicas.length)
    this.crudService.getDt().subscribe(dt => this.numeroMusicasDT = dt.length)
  }

}
