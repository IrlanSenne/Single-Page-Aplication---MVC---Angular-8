import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicaComponent } from '../musica/musica.component';
import { ListaComponent } from '../lista/lista.component';
import { CommonModule } from '@angular/common';
import { MoradaComponent } from '../morada/morada.component';



const routes: Routes = [
  { path: '',  component: ListaComponent,
    children: [
       { path: '', component: MusicaComponent },
      { path: 'lista/:banda', component: MoradaComponent}      
    ]
  }
];

@NgModule({
  declarations: [
    MusicaComponent,  MoradaComponent, ListaComponent],
  imports: [CommonModule ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
