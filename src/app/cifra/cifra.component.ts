import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cifra',
  templateUrl: './cifra.component.html',
  styleUrls: ['./cifra.component.css']
})
export class CifraComponent implements OnInit {  

  n = [ 'C','D','E','F','G','A','B' ]
  

  trocaCifra (nota){        
     console.log(this.n[nota + 1])
  }

  constructor() { }

  ngOnInit() {
  }

}
