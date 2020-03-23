import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { SobreComponent } from './sobre/sobre.component';
import { CifraComponent } from './cifra/cifra.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'musicas', component: MusicaComponent},
  { path : 'sobre', component: SobreComponent},
  { path : 'cifra', component: CifraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
