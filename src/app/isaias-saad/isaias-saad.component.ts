import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-isaias-saad',
  templateUrl: './isaias-saad.component.html',
  styleUrls: ['./isaias-saad.component.css']
})
export class IsaiasSaadComponent implements OnInit {

  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.isaiasSaad().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }

}
