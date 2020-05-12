import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicaComponent } from '../musica/musica.component';
import { ListaComponent } from '../lista/lista.component';
import { MoradaComponent } from '../morada/morada.component';
import { CommonModule } from '@angular/common';
import { GabrielaRochaComponent } from '../gabriela-rocha/gabriela-rocha.component';
import { CorinhosComponent } from '../corinhos/corinhos.component';
import { DtComponent } from '../dt/dt.component';
import { ZoeComponent } from '../zoe/zoe.component';
import { IsaiasSaadComponent } from '../isaias-saad/isaias-saad.component';
import { CasaWorshipComponent } from '../casa-worship/casa-worship.component';


const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    children: [
      { path: '', component: MusicaComponent },
      { path: 'morada',component: MoradaComponent},
      { path: 'gabriela-rocha', component: GabrielaRochaComponent},
      { path: 'corinhos', component: CorinhosComponent},
      { path: 'diante-do-trono', component: DtComponent},
      { path: 'zoe', component: ZoeComponent},
      { path: 'isaias-saad', component: IsaiasSaadComponent},
      { path: 'casa-worship', component: CasaWorshipComponent},
    ]
  }
];

@NgModule({
  declarations: [
    MusicaComponent, ListaComponent, MoradaComponent,GabrielaRochaComponent,CorinhosComponent,
    DtComponent, ZoeComponent, IsaiasSaadComponent, CasaWorshipComponent
  ],
  imports: [CommonModule ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
