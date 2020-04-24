import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-casa-worship',
  templateUrl: './casa-worship.component.html',
  styleUrls: ['./casa-worship.component.css']
})
export class CasaWorshipComponent implements OnInit {

  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.casaWorship().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }


}
