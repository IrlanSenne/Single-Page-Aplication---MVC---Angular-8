import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-corinhos',
  templateUrl: './corinhos.component.html',
  styleUrls: ['./corinhos.component.css']
})
export class CorinhosComponent implements OnInit {

  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getMusic().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }

}
