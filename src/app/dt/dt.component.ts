import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.css']
})
export class DtComponent implements OnInit {

  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getDt().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }

}