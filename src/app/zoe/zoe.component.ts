import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-zoe',
  templateUrl: './zoe.component.html',
  styleUrls: ['./zoe.component.css']
})
export class ZoeComponent implements OnInit { bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getZoe().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }


}
