import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CifraComponent } from './cifra/cifra.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    HomeComponent,
    SobreComponent,
    CifraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
