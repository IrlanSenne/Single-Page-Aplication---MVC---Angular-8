import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CifraComponent } from './cifra/cifra.component';
import { CifraDtComponent } from './cifra-dt/cifra-dt.component';
import { CifraMoradaComponent } from './cifra-morada/cifra-morada.component';
import { CifraGabrielaRochaComponent } from './cifra-gabriela-rocha/cifra-gabriela-rocha.component';
import { CifraZoeComponent } from './cifra-zoe/cifra-zoe.component';
import { CifraIsaiasSaadComponent } from './cifra-isaias-saad/cifra-isaias-saad.component';
import { CifraCasaWorshipComponent } from './cifra-casa-worship/cifra-casa-worship.component';
import { LazyModule } from './lazy/lazy.module';



const routes: Routes = [
  { path : '', component: HomeComponent},
//Lazy Loading Musicas
  { path : 'musicas', loadChildren: () =>
     import('./lazy/lazy.module').then(
       m => m.LazyModule)
  },
//Sobre e Mensagem
  { path : 'sobre', loadChildren: './sobre/sobre.module#SobreModule'},
  { path : 'mensagem', loadChildren: () =>
  import('./mensagem/mensagem.module').then(
    m => m.MensagemModule)
},
 // Cifras
  { path : 'corinhos/:id', component: CifraComponent},
  { path : 'dt/:id', component: CifraDtComponent},
  { path : 'morada/:id', component: CifraMoradaComponent},
  { path : 'gabriela-rocha/:id', component: CifraGabrielaRochaComponent},
  { path : 'zoe/:id', component: CifraZoeComponent},
  { path : 'isaias-saad/:id', component: CifraIsaiasSaadComponent},
  { path : 'casa-worship/:id', component: CifraCasaWorshipComponent},
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
