import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { CifraComponent } from './cifra/cifra.component';
import { ListaComponent } from './lista/lista.component';
import { CorinhosComponent } from './corinhos/corinhos.component';
import { DtComponent } from './dt/dt.component';
import { CifraDtComponent } from './cifra-dt/cifra-dt.component';
import { MoradaComponent } from './morada/morada.component';
import { CifraMoradaComponent } from './cifra-morada/cifra-morada.component';
import { CifraGabrielaRochaComponent } from './cifra-gabriela-rocha/cifra-gabriela-rocha.component';
import { GabrielaRochaComponent } from './gabriela-rocha/gabriela-rocha.component';
import { ZoeComponent } from './zoe/zoe.component';
import { CifraZoeComponent } from './cifra-zoe/cifra-zoe.component';
import { IsaiasSaadComponent } from './isaias-saad/isaias-saad.component';
import { CifraIsaiasSaadComponent } from './cifra-isaias-saad/cifra-isaias-saad.component';
import { CasaWorshipComponent } from './casa-worship/casa-worship.component';
import { CifraCasaWorshipComponent } from './cifra-casa-worship/cifra-casa-worship.component';



const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'musicas', component: MusicaComponent},
  { path : 'sobre', loadChildren: './sobre/sobre.module#SobreModule'},
  { path : 'mensagem', loadChildren: './mensagem/mensagem.module#MensagemModule'},
  { path : 'lista', component: ListaComponent},
  { path : 'corinhos', component: CorinhosComponent},
  { path : 'corinhos/:id', component: CifraComponent},
  {path: 'diante-do-trono', component: DtComponent},
  { path : 'dt/:id', component: CifraDtComponent},
  {path: 'morada', component: MoradaComponent},
  { path : 'morada/:id', component: CifraMoradaComponent},
  {path: 'gabriela-rocha', component: GabrielaRochaComponent},
  { path : 'gabriela-rocha/:id', component: CifraGabrielaRochaComponent},
  {path: 'zoe', component: ZoeComponent},
  { path : 'zoe/:id', component: CifraZoeComponent},
  {path: 'isaias-saad', component: IsaiasSaadComponent},
  { path : 'isaias-saad/:id', component: CifraIsaiasSaadComponent},
  {path: 'casa-worship', component: CasaWorshipComponent},
  { path : 'casa-worship/:id', component: CifraCasaWorshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
