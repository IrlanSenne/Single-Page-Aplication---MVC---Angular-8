import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() banda: any



  constructor(private crudService: CrudService) { }

  ngOnInit() {

   
  }

}
