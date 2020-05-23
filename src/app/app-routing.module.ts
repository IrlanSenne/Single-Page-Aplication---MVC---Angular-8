import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CifraComponent } from './cifra/cifra.component';



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
  { path : 'cifra/:banda/:id', component: CifraComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
