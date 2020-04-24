import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica.component';
import { HomeComponent } from './home/home.component';
import { CifraComponent } from './cifra/cifra.component';
import { HttpClientModule } from "@angular/common/http";
import { CrudService } from './crud.service';
import { CorinhosComponent } from './corinhos/corinhos.component';
import { ListaComponent } from './lista/lista.component';
import { AutofocusDirective } from './autofocus.directive';
import { DtComponent } from './dt/dt.component';
import { CifraDtComponent } from './cifra-dt/cifra-dt.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoradaComponent } from './morada/morada.component';
import { CifraMoradaComponent } from './cifra-morada/cifra-morada.component';
import { GabrielaRochaComponent } from './gabriela-rocha/gabriela-rocha.component';
import { CifraGabrielaRochaComponent } from './cifra-gabriela-rocha/cifra-gabriela-rocha.component';
import { ZoeComponent } from './zoe/zoe.component';
import { CifraZoeComponent } from './cifra-zoe/cifra-zoe.component';
import { MensagemModule } from './mensagem/mensagem.module';
import { IsaiasSaadComponent } from './isaias-saad/isaias-saad.component';
import { CifraIsaiasSaadComponent } from './cifra-isaias-saad/cifra-isaias-saad.component';
import { CasaWorshipComponent } from './casa-worship/casa-worship.component';
import { CifraCasaWorshipComponent } from './cifra-casa-worship/cifra-casa-worship.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    HomeComponent,
    CifraComponent,
    CorinhosComponent,
    ListaComponent,
    AutofocusDirective,
    DtComponent,
    CifraDtComponent,
    MoradaComponent,
    CifraMoradaComponent,
    GabrielaRochaComponent,
    CifraGabrielaRochaComponent,
    ZoeComponent,
    CifraZoeComponent,
    IsaiasSaadComponent,
    CifraIsaiasSaadComponent,
    CasaWorshipComponent,
    CifraCasaWorshipComponent,
    IsaiasSaadComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    MensagemModule
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
