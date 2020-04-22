import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-morada',
  templateUrl: './morada.component.html',
  styleUrls: ['./morada.component.css']
})
export class MoradaComponent implements OnInit {
  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getMorada().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }

}
