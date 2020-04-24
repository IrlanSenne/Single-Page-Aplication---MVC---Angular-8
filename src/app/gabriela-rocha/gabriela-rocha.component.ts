import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-gabriela-rocha',
  templateUrl: './gabriela-rocha.component.html',
  styleUrls: ['./gabriela-rocha.component.css']
})
export class GabrielaRochaComponent implements OnInit {

  bandas: any[]
  mostra: boolean = false

  constructor(private crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getGabrielaRocha().pipe(delay(1000)).subscribe(data => {
      this.bandas = data
      this.mostra = true
    })
  }

}
