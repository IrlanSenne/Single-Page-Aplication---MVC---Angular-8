import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { SobreComponent } from './sobre/sobre.component';
import { CifraComponent } from './cifra/cifra.component';
import { ListaComponent } from './lista/lista.component';
import { CorinhosComponent } from './corinhos/corinhos.component';
import { DtComponent } from './dt/dt.component';
import { CifraDtComponent } from './cifra-dt/cifra-dt.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'musicas', component: MusicaComponent},
  { path : 'sobre', component: SobreComponent},
  { path : 'lista', component: ListaComponent},
  { path : 'corinhos', component: CorinhosComponent},
  { path : 'corinhos/:id', component: CifraComponent},
  {path: 'diante-do-trono', component: DtComponent},
  { path : 'dt/:id', component: CifraDtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
