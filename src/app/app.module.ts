import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
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
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    HomeComponent,
    SobreComponent,
    CifraComponent,
    CorinhosComponent,
    ListaComponent,
    AutofocusDirective,
    DtComponent,
    CifraDtComponent,
    MoradaComponent,
    CifraMoradaComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
